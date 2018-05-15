package main

import (
	"encoding/json"
	"io/ioutil"
	"github.com/gorilla/sessions"
)

type ConfigData struct {
	Secret       string `json:"secret"`
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
	SessionStore = sessions.NewCookieStore([]byte(MasherConfig.Secret))
}
