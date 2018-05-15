package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

func main() {
	LoadConfig("config/masher_config.json")
	InitSession()
	InitDB()
	InitTemplates()
	router := mux.NewRouter()
	
	// pages
	router.HandleFunc("/", ViewHomepage)
	router.HandleFunc("/new", ViewNew)
	router.HandleFunc("/patch/{id}", ViewPatch)
	router.HandleFunc("/continue", ViewContinue)
	router.HandleFunc("/browse", ViewBrowse)
	router.HandleFunc("/about", ViewAbout)

	// api endpoints
	router.HandleFunc("/api/signup", Signup).Methods("POST")
	router.HandleFunc("/api/login", Login).Methods("POST")
	router.HandleFunc("/api/post", PostPatch).Methods("POST")
	router.HandleFunc("/api/update", UpdatePatch).Methods("POST")
	
	// redirects
	router.HandleFunc("/logout", Logout)
	
	router.NotFoundHandler = http.HandlerFunc(ViewNotFound)
	log.Fatal(http.ListenAndServe(":8000", router))
}
