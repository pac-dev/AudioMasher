package main

import (
	"math/rand"
	"time"

	"github.com/asdine/storm/v3"
)

type MasherPatch struct {
	Id           string `storm:"id"`
	DateCreated  int64
	DateModified int64
	Title        string
	Author       string
	Files        map[string]string
}

type MasherUser struct {
	Name        string `storm:"id"`
	Password    string
	Email       string
	DateCreated int64
}

type SearchFilter struct {
	Author string
}

var db *storm.DB

func InitDB() {
	var err error
	db, err = storm.Open(MasherConfig.DBPath)
	if err != nil {
		panic(err)
	}
	rand.Seed(time.Now().UnixNano())
}

func RetrievePatch(id string) (MasherPatch, error) {
	var result MasherPatch
	err := db.One("Id", id, &result)
	return result, err
}

func RetrievePatches(filter SearchFilter) ([]MasherPatch, error) {
	var results []MasherPatch
	var err error
	if filter.Author != "" {
		err = db.Find("Author", filter.Author, &results)
	} else {
		err = db.All(&results)
	}
	return results, err
}

func PutPatch(patch MasherPatch) error {
	err := db.Save(&patch)
	return err
}

func RetrieveUser(name string) (MasherUser, error) {
	var result MasherUser
	err := db.One("Name", name, &result)
	return result, err
}

func RetrieveUsers() ([]MasherUser, error) {
	var results []MasherUser
	err := db.All(&results)
	return results, err
}

func AddUser(user MasherUser) error {
	err := db.Save(&user)
	return err
}
