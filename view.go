package main

import (
	"net/http"
	"html/template"
	"github.com/gorilla/mux"
	"time"
	"sort"
)

type TemplateData struct {
	CurrentView string
	LoggedIn bool
	CanUpdatePatch bool
	UserName string
	StaticRoot string
	Headline string
	HeadlinePrefix string
	FinalJS template.JS
	Patch MasherPatch
	Patches []MasherPatch
	Referer string
}

var masherTemplates *template.Template

func InitTemplates() {
	var err error
	masherTemplates, err = template.New("masher").Funcs(template.FuncMap{
			"HumanDate": func(d int64) string {
				return time.Unix(d, 0).Format("2006/01/02")
			},
		}).ParseFiles(
			"templates/layout.html",
			"templates/patch.html",
			"templates/browse.html",
			"templates/about.html",
			"templates/404.html")
	if err != nil { panic(err) }
}

func BaseTemplateData(w http.ResponseWriter, r *http.Request) TemplateData {
	ret := TemplateData {
		StaticRoot: MasherConfig.StaticRoot}
	session, err := SessionStore.Get(r, "sess")
	if err != nil { panic(err) }
	if ret.UserName, ret.LoggedIn = session.Values["name"].(string); !ret.LoggedIn {
		ret.UserName = ""
	}
	return ret
}

func ViewPatch(w http.ResponseWriter, r *http.Request) {
	var err error
	params := mux.Vars(r)
	data := BaseTemplateData(w, r)
	data.Patch, err = RetrievePatch(params["id"])
	if err != nil {
		ViewNotFound(w, r)
		return
	}
	if data.Patch.Author == data.UserName {
		data.CanUpdatePatch = true
	}
	data.CurrentView = "Patch"
	data.Headline = data.Patch.Title + " by " + data.Patch.Author
	err = masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}

func ViewContinue(w http.ResponseWriter, r *http.Request) {
	data := BaseTemplateData(w, r)
	data.CurrentView = "Patch"
	data.HeadlinePrefix = "Editing: "
	data.Headline = "new patch"
	data.Patch.Files = map[string]string{"main.sp": "# You have just one Sporth. Make something.\n\n"}
	data.FinalJS = "  restoreAutosave(); "
	err := masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}

func ViewNew(w http.ResponseWriter, r *http.Request) {
	data := BaseTemplateData(w, r)
	data.CurrentView = "Patch"
	data.HeadlinePrefix = "Editing: "
	data.Headline = "new patch"
	data.Patch.Files = map[string]string{"main.sp": "# You have just one Sporth. Make something.\n\n"}
	err := masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}

func ViewHomepage(w http.ResponseWriter, r *http.Request) {
	var err error
	data := BaseTemplateData(w, r)
	data.Patch, err = RetrievePatch(MasherConfig.FeaturedPatch)
	if err != nil {
		ViewAbout(w, r)
		return
	}
	data.CurrentView = "Patch"
	data.HeadlinePrefix = "Featured: "
	data.Headline = data.Patch.Title + " by " + data.Patch.Author
	err = masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}

func ViewBrowse(w http.ResponseWriter, r *http.Request) {
	var err error
	data := BaseTemplateData(w, r)
	data.Patches, err = RetrievePatches()
	if err != nil {
		ViewNotFound(w, r)
		return
	}
	sort.Slice(data.Patches, func(i, j int) bool {
		return data.Patches[i].DateCreated > data.Patches[j].DateCreated
	})
	data.HeadlinePrefix = "Viewing: "
	data.Headline = "all patches"
	data.CurrentView = "Browse"
	err = masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}

func ViewAbout(w http.ResponseWriter, r *http.Request) {
	data := BaseTemplateData(w, r)
	data.Headline = "About"
	data.CurrentView = "About"
	err := masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}

func ViewNotFound(w http.ResponseWriter, r *http.Request) {
	data := BaseTemplateData(w, r)
	data.Headline = "404 - Not Found"
	data.CurrentView = "404"
	err := masherTemplates.ExecuteTemplate(w, "layout.html", data)
	if err != nil { panic(err) }
}
