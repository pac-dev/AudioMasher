package main

import (
	"net/http"
	"sort"
	"text/template"
	"time"
)

type FeedTemplateData struct {
	Patches []MasherPatch
	Updated int64
}

var feedTemplate *template.Template

func InitFeedTemplate() {
	var err error
	funcs := template.FuncMap{
		"HumanDate": func(d int64) string {
			return time.Unix(d, 0).Format("2006/01/02")
		},
		"formatRFC3339": func(d int64) string {
			return time.Unix(d, 0).Format(time.RFC3339)
		},
	}
	feedTemplate, err = template.New("feed").Funcs(funcs).ParseFiles(
		"templates/feed.xml")
	if err != nil {
		panic(err)
	}
}

func ViewFeed(w http.ResponseWriter, r *http.Request) {
	var err error
	data := FeedTemplateData{}
	data.Patches, err = RetrievePatches(SearchFilter{})
	if err != nil {
		ViewNotFound(w, r)
		return
	}
	sort.Slice(data.Patches, func(i, j int) bool {
		return data.Patches[i].DateModified > data.Patches[j].DateModified
	})
	data.Updated = 0
	if len(data.Patches) > 0 {
		data.Updated = data.Patches[0].DateModified
	}
	data.Patches = data.Patches[:20]
	w.Header().Set("Content-Type", "application/atom+xml; charset=UTF-8")
	err = feedTemplate.ExecuteTemplate(w, "feed.xml", data)
	if err != nil {
		panic(err)
	}
}
