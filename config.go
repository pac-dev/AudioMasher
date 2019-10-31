package main

import (
	"encoding/hex"

	"github.com/JeremyLoy/config"
	"github.com/gorilla/sessions"
)

type ConfigData struct {
	CookieSecret  string `config:"MASHER_COOKIE_SECRET"`
	DBPath        string `config:"MASHER_DB_PATH"`
	StaticRoot    string `config:"MASHER_STATIC_ROOT"`
	Port          int    `config:"MASHER_PORT"`
	FeaturedPatch string `config:"MASHER_FEATURED_PATCH"`
}

var MasherConfig ConfigData

func LoadConfig(file string) {
	err := config.From("config/masher.config").FromEnv().To(&MasherConfig)
	if err != nil {
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
