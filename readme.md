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

Sporth is already compiled to JS and included in the project, but if you want to compile it yourself, the code glue is here: https://github.com/pac-dev/SporthEm

## Running
- Serve the `static` folder from a static host.
- Create your own `config/masher.config` based on the included example config file.
- Run the AudioMasher binary alongside the `templates` and `config` directories.

## Troubleshooting
- Files served by the static host might require some HTTP headers:
	- access-control-allow-origin set to the server address
	- content-type: application/wasm for the wasm file

## Tools used
- Sporth is compiled to WASM using [Emscripten](https://github.com/kripken/emscripten)
- Scripts and users are stored using [Storm](https://github.com/asdine/storm)
- This project is tested with [BrowserStack](https://www.browserstack.com/).