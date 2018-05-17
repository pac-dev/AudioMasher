package main

import (
	"encoding/json"
	"io/ioutil"
	"github.com/gorilla/sessions"
)
		
type ConfigData struct {
	CookieSecret string `json:"cookie_secret"`
	DynamoEndpoint string `json:"dynamo_endpoint"`
	DynamoRegion string `json:"dynamo_region"`
	DynamoId string `json:"dynamo_id"`
	DynamoSecret string `json:"dynamo_secret"`
	DynamoToken string `json:"dynamo_token"`
	Port int `json:"port"`
}

var MasherConfig ConfigData

func LoadConfig(file string) () {
	b, err := ioutil.ReadFile(file)
	if err != nil {
		panic(err)
	}
	if err = json.Unmarshal(b, &MasherConfig); err != nil {
		panic(err)
	}
}

var SessionStore *sessions.CookieStore
func InitSession() {
	SessionStore = sessions.NewCookieStore([]byte(MasherConfig.CookieSecret))
}
