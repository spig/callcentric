callcentric
===========

This is a site to keep track of browser extensions that augment the Callcentric dashboard.

## Features
1. Put a phone book icon next to calls made and calls received that already have been added to the Callcentric phonebook.

The Google Chrome Extension can be found at https://chrome.google.com/webstore/detail/callcentric-recent-calls/cgomdgoelkgkdhegmapgjfabcggphjgo.

The Firefox Add-On can be found at https://addons.mozilla.org/en-US/firefox/addon/callcentric-recent-calls-ph/

## Howto Run the Extension and Add-On
In Chrome simply enable developer mode and choose the "Load unpacked extension..." button, selecting the chrome extension folder.

For Firefox make sure that the cfx tool is installed and either run `cfx run` or install the [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/) and then something like `while true; do cfx xpi ; wget --post-file=callcentric-calls-phonebook-matchup.xpi http://localhost:8888/ ; sleep 5 ; done` or one could use [Grunt](http://gruntjs.com/) and [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) to watch for changes in the add-on folder and run the cfx and wget commands.

## Howto Package the Extension and Add-On

### Packaging the Chrome Extension
1. Follow instructions at [developer.chrome.com](https://developer.chrome.com/webstore/publish)
2. Zip file can be created by running `zip *` in the chrome extension folder

### Packaging the Firefox Extension
1. From the command line run `cfx xpi`
2. Upload to [Mozilla Add-On Developer Hub](https://addons.mozilla.org/en-US/developers/addons)

## Future
Any ideas? I've currently scratched my itch.
