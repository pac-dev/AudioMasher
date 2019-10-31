## Upstart service for AudioMasher
The script assumes that the AudioMasher binary as well as the `config` and `templates` directories are in `/srv/audiomasher/`. Copy audiomasher.conf to your server, then:

	sudo mv audiomasher.conf /etc/init/
	sudo chown --reference=/etc/init/tty.conf /etc/init/audiomasher.conf 
	sudo chmod --reference=/etc/init/tty.conf /etc/init/audiomasher.conf 
	sudo initctl reload-configuration
	sudo start audiomasher

