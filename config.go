package main

import (
	"encoding/hex"
	"encoding/json"
	"github.com/gorilla/sessions"
	"io/ioutil"
)

type ConfigData struct {
	CookieSecret   string `json:"cookie_secret"`
	DynamoEndpoint string `json:"dynamo_endpoint"`
	DynamoRegion   string `json:"dynamo_region"`
	DynamoId       string `json:"dynamo_id"`
	DynamoSecret   string `json:"dynamo_secret"`
	DynamoToken    string `json:"dynamo_token"`
	StaticRoot     string `json:"static_root"`
	Port           int    `json:"port"`
	FeaturedPatch  string `json:"featured_patch"`
}

var MasherConfig ConfigData

func LoadConfig(file string) {
	data, err := ioutil.ReadFile(file)
	if err != nil {
		panic(err)
	}
	if err = json.Unmarshal(data, &MasherConfig); err != nil {
		panic(err)
	}
}

var SessionStore *sessions.CookieStore

func InitSession() {
	secret, err := hex.DecodeString(MasherConfig.CookieSecret)
	if err != nil {
		panic(err)
	}
	SessionStore = sessions.NewCookieStore(secret)
}
