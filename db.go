package main

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/guregu/dynamo"
	"math/rand"
	"time"
)

var dbPatches dynamo.Table
var dbUsers dynamo.Table

type MasherPatch struct {
	Id string `json:"id,omitempty"`
	DateCreated int64 `json:"datecreated,omitempty"`
	DateModified int64 `json:"datecreated,omitempty"`
	Title string `json:"title,omitempty"`
	Author string `json:"author,omitempty"`
	Files map[string]string `json:"files,omitempty"`
}

type MasherUser struct {
	Name string `json:"name,omitempty"`
	Password string `json:"password,omitempty"`
	Email string `json:"email,omitempty"`
	DateCreated int64 `json:"created,omitempty"`
}

type SearchFilter struct {
	Author string
}

func InitDB() {
	db := dynamo.New(session.New(), &aws.Config{
		Endpoint: aws.String(MasherConfig.DynamoEndpoint), 
		Region: aws.String(MasherConfig.DynamoRegion),
		Credentials: credentials.NewStaticCredentials(
			MasherConfig.DynamoId, 
			MasherConfig.DynamoSecret, 
			MasherConfig.DynamoToken)})
	dbPatches = db.Table("MasherPatches")
	dbUsers = db.Table("MasherUsers")
	rand.Seed(time.Now().UnixNano())
}

func RetrievePatch(id string) (MasherPatch, error) {
	var result MasherPatch
	err := dbPatches.
		Get("Id", id).
		Range("DateCreated", dynamo.GreaterOrEqual, 0).
		One(&result)
	if err != nil {
		return result, err
	}
	return result, nil
}

func RetrievePatches(filter SearchFilter) ([]MasherPatch, error) {
	var allPatches []MasherPatch
	err := dbPatches.Scan().All(&allPatches)
	if err != nil {
		return allPatches, err
	}
	if (filter.Author != "") {
		filteredPatches := allPatches[:0]
		for _, patch := range allPatches {
			if (patch.Author == filter.Author) {
				filteredPatches = append(filteredPatches, patch)
			}
		}
		return filteredPatches, nil
	}
	return allPatches, nil
}

func PutPatch(patch MasherPatch) error {
	err := dbPatches.Put(patch).Run() 
	return err
}

func RetrieveUser(name string) (MasherUser, error) {
	var result MasherUser
	err := dbUsers.
		Get("Name", name).
		One(&result)
	if err != nil {
		return result, err
	}
	return result, nil
}

func RetrieveUsers() ([]MasherUser, error) {
	var result []MasherUser
	err := dbUsers.Scan().All(&result)
	if err != nil {
		return result, err
	}
	return result, nil
}

func AddUser(user MasherUser) error {
	err := dbUsers.Put(user).Run() 
	return err
}
