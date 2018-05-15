package main

import (
    "encoding/json"
    "net/http"
	"math/rand"
	"golang.org/x/crypto/bcrypt"
	"errors"
	"time"
	"encoding/base32"
)

type ApiResult struct {
	Success bool `json:"success"`
	Message string `json:"message"`
	PatchId string `json:"patchId,omitempty"`
}

func CheckPatchValid(patch MasherPatch) error {
	if _, exists := patch.Files["main.sp"]; !exists {
		return errors.New("Patch must have a main.sp file")
	}
	if patch.Title == "" {
		return errors.New("Title is missing or empty.")
	}
	if len(patch.Files["main.sp"]) > 100000 {
		return errors.New("Script too long (> 100K characters).")
	}
	if len(patch.Files["readme.txt"]) > 100000 {
		return errors.New("Description too long (> 100K characters).")
	}
	if len(patch.Title) > 50 {
		return errors.New("Title too long (> 50 characters).")
	}
	return nil
}

func CheckPatchUnique(patch MasherPatch) error {
	patches, err := RetrievePatches()
	if (err != nil) {
		return errors.New("Could not load database for duplicate checking.")
	}
	for _, oldpatch := range patches {
		if (oldpatch.Title == patch.Title) {
			return errors.New("A patch with the same title already exists.")
		}
		if (oldpatch.Files["main.sp"] == patch.Files["main.sp"]) {
			return errors.New("A patch with the same script content already exists.")
		}
		if (oldpatch.Id == patch.Id) {
			return errors.New("Internal laziness error, try again.")
		}
	}
	return nil
}

func RandomId() string {
	data := make([]byte, 5)
	rand.Read(data)
	str2 := base32.StdEncoding.EncodeToString(data)
	return str2[:6]
}

func PostPatch(w http.ResponseWriter, r *http.Request) {
	result := ApiResult { Success: false, Message: "Error posting patch. \n" }
	title := r.FormValue("title")
	mainScript := r.FormValue("main_script")
	patchDesc := r.FormValue("desc")
	session, err := SessionStore.Get(r, "sess")
	if err != nil { panic(err) }
	if _, loggedIn := session.Values["name"].(string); !loggedIn {
		result.Message += "You are not logged in."
		json.NewEncoder(w).Encode(&result)
		return
	}
	
	patch := MasherPatch {
		Id: "OZOIGB",
		DateCreated: time.Now().Unix(),
		DateModified: time.Now().Unix(),
		Title: title,
		Author: session.Values["name"].(string),
		Files: map[string]string{"main.sp": mainScript, "readme.txt": patchDesc},
	}
	
	if err = CheckPatchValid(patch); err != nil {
		result.Message += err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	if err = CheckPatchUnique(patch); err != nil {
		result.Message += err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	err = PutPatch(patch)
	if err != nil {
		result.Message += err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	result = ApiResult {
		Success: true,
		Message: "Patch added: " + patch.Title + " by " + patch.Author,
		PatchId: patch.Id,
	}
	json.NewEncoder(w).Encode(&result)
}

func UpdatePatch(w http.ResponseWriter, r *http.Request) {
	result := ApiResult { Success: false, Message: "Error updating patch. \n" }
	title := r.FormValue("title")
	mainScript := r.FormValue("main_script")
	patchDesc := r.FormValue("desc")
	updateId := r.FormValue("update_id")
	session, err := SessionStore.Get(r, "sess")
	if err != nil { panic(err) }
	
	
	patch, err2 := RetrievePatch(updateId)
	if err2 != nil {
		result.Message += "Could not find existing patch in database."
		json.NewEncoder(w).Encode(&result)
		return
	}
	
	if currentUser, _ := session.Values["name"].(string); currentUser != patch.Author {
		result.Message += "You are not the author of this patch."
		json.NewEncoder(w).Encode(&result)
		return
	}
	
	patch.DateModified = time.Now().Unix()
	patch.Title = title
	patch.Files = map[string]string{"main.sp": mainScript, "readme.txt": patchDesc}
	
	if err = CheckPatchValid(patch); err != nil {
		result.Message += err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	err = PutPatch(patch)
	if err != nil {
		result.Message += err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	result = ApiResult {
		Success: true,
		Message: "Patch updated: " + patch.Title + " by " + patch.Author,
		PatchId: patch.Id,
	}
	json.NewEncoder(w).Encode(&result)
}

func CheckUserValid(user MasherUser) error {
	if len(user.Name) < 2 || len(user.Name) > 50 {
		return errors.New("Username must be between 2 and 50 characters.")
	}
	users, err := RetrieveUsers()
	if (err != nil) {
		return errors.New("Could not load database for duplicate checking.")
	}
	for _, olduser := range users {
		if (olduser.Name == user.Name) {
			return errors.New("A user with the same name already exists.")
		}
	}
	return nil
}

func Signup(w http.ResponseWriter, r *http.Request) {
	result := ApiResult { Success: false, Message: "Error creating user. \n" }
	username := r.FormValue("username")
	session, err := SessionStore.Get(r, "sess")
	if err != nil { panic(err) }
	if _, loggedIn := session.Values["name"].(string); loggedIn {
		result.Message += "You are already logged in."
		json.NewEncoder(w).Encode(&result)
		return
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(r.FormValue("password")), 8)
	if err != nil { panic(err) }
	user := MasherUser {
		Name: username,
		Password: string(hash),
		Email: r.FormValue("email"),
		DateCreated: time.Now().Unix(),
	}
	if err = CheckUserValid(user); err != nil {
		result.Message += err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	err = AddUser(user)
	if err != nil {
		result.Message += "Error adding user: " + err.Error()
		json.NewEncoder(w).Encode(&result)
		return
	}
	result = ApiResult {
		Success: true,
		Message: "User created: " + username,
	}
	json.NewEncoder(w).Encode(&result)
}

func Login(w http.ResponseWriter, r *http.Request) {
	result := ApiResult { Success: false, Message: "Error logging in. \n" }
	username := r.FormValue("username")
	session, err := SessionStore.Get(r, "sess")
	if err != nil { panic(err) }
	if _, loggedIn := session.Values["name"].(string); loggedIn {
		result.Message += "You are already logged in."
		json.NewEncoder(w).Encode(&result)
		return
	}
	storedUser, err2 := RetrieveUser(username)
	if err2 != nil {
		result.Message += "User not found."
		json.NewEncoder(w).Encode(&result)
		return
	}
	err = bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(r.FormValue("password")))
	if err != nil {
		result.Message += "Wrong password."
		json.NewEncoder(w).Encode(&result)
		return
	}
	
	session.Values["name"] = username
	session.Save(r, w)
	result = ApiResult {
		Success: true,
		Message: "User logged in: " + username,
	}
	json.NewEncoder(w).Encode(&result)
}

func Logout(w http.ResponseWriter, r *http.Request) {
	session, _ := SessionStore.Get(r, "sess")
	for k := range session.Values {
		delete(session.Values, k)
	}
	session.Save(r, w)
	http.Redirect(w, r, "/", 302)
}







