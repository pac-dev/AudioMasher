package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func main() {
	LoadConfig("config/masher_config.json")
	InitSession()
	InitDB()
	InitTemplates()
	router := mux.NewRouter()

	// pages
	router.HandleFunc("/", ViewAbout)
	router.HandleFunc("/new", ViewNew)
	router.HandleFunc("/patch/{id}", ViewPatch)
	router.HandleFunc("/user/{user}", ViewUser)
	router.HandleFunc("/continue", ViewContinue)
	router.HandleFunc("/browse", ViewBrowse)
	router.HandleFunc("/learn", ViewLearn)
	router.HandleFunc("/learn/{page}", ViewLearn)

	// api endpoints
	router.HandleFunc("/api/signup", Signup).Methods("POST")
	router.HandleFunc("/api/login", Login).Methods("POST")
	router.HandleFunc("/api/post", PostPatch).Methods("POST")
	router.HandleFunc("/api/update", UpdatePatch).Methods("POST")

	// redirects
	router.HandleFunc("/logout", Logout)
	router.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/", 302)
	})

	router.NotFoundHandler = http.HandlerFunc(ViewNotFound)
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(MasherConfig.Port), router))
}
