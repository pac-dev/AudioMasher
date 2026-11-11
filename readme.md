# AudioMasher
Generative Audio Playground - https://www.audiomasher.org

- Edit and play [Sporth](https://audiomasher.org/learn) patches (audio scripts) in the browser
- Browse and listen to existing patches
- Add your patches to the collection
- Subscribe to the [Atom feed](https://audiomasher.org/feed) of published patches

## Writing audio patches

While Sporth code may look esoteric at first glance, it's surprisingly easy to write, especially with immediate audio feedback. This readme doesn't cover the Sporth language itself, but resources to learn Sporth are readily available:

- The [interactive Sporth tutorial](https://audiomasher.org/learn) on AudioMasher itself
- The [original version](https://paulbatchelor.github.io/proj/cook/) of the tutorial by Paul Batchelor
- For more general patch-crafting knowledge, Ableton's excellent [Learning Synths](https://learningsynths.ableton.com/) tutorial is directly applicable to Sporth programming
- For more in-depth sound programming knowledge, I recommend Sean Luke's free online book [Computational Music Synthesis](https://people.cs.gmu.edu/~sean/book/synthesis/)

## Building AudioMasher
To get the latest source and build the server using [Git](https://git-scm.com/downloads) and [Go](https://golang.org/dl/):

	git clone https://github.com/pac-dev/AudioMasher
	cd AudioMasher/
	go build

Sporth is already compiled to JS and included in the project, but if you want to compile it yourself, the code glue is here: https://github.com/pac-dev/SporthEm

## Running the AudioMasher server
- Serve the `static` folder from a static host.
- Create your own `config/masher.config` based on the included example config file.
	- Note: all config variables can also be set in the environment (which takes precedence).
- Run the AudioMasher binary alongside the `templates` and `config` directories.

## Troubleshooting the server
- Files served by the static host might require some HTTP headers:
	- access-control-allow-origin set to the server address
	- content-type: application/wasm for the wasm file

## Tools used
- Sporth is compiled to WASM using [Emscripten](https://github.com/kripken/emscripten)
- Scripts and users are stored using [Storm](https://github.com/asdine/storm)
- This project is tested with [BrowserStack](https://www.browserstack.com/).
