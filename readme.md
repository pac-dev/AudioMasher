# AudioMasher
Generative Audio Playground - https://www.audiomasher.org

- Edit and play [Sporth](https://paulbatchelor.github.io/proj/sporth.html) audio scripts in the browser
- Browse and listen to existing scripts
- Add your scripts to the collection

## Building
To get the latest source and build the server using [Git](https://git-scm.com/downloads) and [Go](https://golang.org/dl/):

	git clone https://github.com/pac-dev/AudioMasher
	cd AudioMasher/
	go build

Sporth is already compiled to JS and included in the project, but if you want to compile it yourself, the code glue is here: https://github.com/pac-dev/SporthAL

## Running
- Serve the `static` folder from a static host.
- Create your own `config/masher_config.json` based on the included example json.
- Deploy the AudioMasher binary to a server alongside the `templates` and `config` directories.
