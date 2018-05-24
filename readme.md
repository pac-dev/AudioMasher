# AudioMasher
Generative Audio Playground - https://www.audiomasher.org

- Edit and play [Sporth](https://paulbatchelor.github.io/proj/sporth.html) audio scripts in the browser
- Browse and listen to existing scripts
- Add your scripts to the collection

## Building
The server is a simple Go project:

	go get github.com/pac-dev/AudioMasher
	cd $GOPATH/src/github.com/pac-dev/AudioMasher
	go build

Sporth is already compiled to JS and included in the project, but if you want to compile it yourself, the code glue is here: https://github.com/pac-dev/SporthAL

## Deploying
- In a DynamoDB database, create the following tables:

		aws dynamodb create-table --cli-input-json file://scripts/create-table-patches.json
		aws dynamodb create-table --cli-input-json file://scripts/create-table-users.json

- Serve the `static` folder from a static host.
- Create your own `config/masher_config.json` based on the included example json.
- Deploy the AudioMasher binary to a server alongside the `templates` and `config` directories.

## Local Testing
Follow the same steps as for "Deploying", with the following differences:
- Use DynamoDB Local and add `--endpoint-url http://localhost:8001` to the `aws` commands.
- Serve static files using a local server and run the binary locally.