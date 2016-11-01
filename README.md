# trouvaille
**NOTE**: THIS DOESN'T ACTUALLY DO ANYTHING YET

Searches through your iTunes music library finding those albums that you're missing. This is a NodeJS/Electron application based off [samrayner/discographer](https://github.com/samrayner/discographer).

I wanted something to do to practice using NodeJS/Electron and figured turning this web application into something 
local would work nicely (and add some features I want to take advantage of the nice local storage I've got access to).

This library uses [MusicBrainz](http://musicbrainz.org/) as its reference for artists and their albums instead of 
Spotify. Hopefully someone other than me finds this useful.

## Usage
#### Running

```
$ npm install
$ npm start
```

#### Build

```
$ npm run build
```

Builds the app for macOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).
