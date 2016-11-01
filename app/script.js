"use strict";

require('consoleplusplus');

const fs = require('fs'),
      path = require('path'),
      itunes = require('itunes-data');

const {ipcRenderer} = require('electron');

let parser = itunes.parser();
let itunes_path = path.join(__dirname, "static", "iTunes Music Library.xml");
let stream = fs.createReadStream(itunes_path);
let artists = {};

parser.on("track", (track) => {
  let obj = {
    artist: track["Artist"],
    album: track["Album"],
    year: track["Year"]
  };

  /**
   * We need to make a call out at this point to MusicBrainz so we can get the right artist as we want to
   * use their "unique" ID in our artists object, and not just what's attached to this album. In this way,
   * we might be able to deal with multiple bands having the same artist name in a library potentially.
   */
  if (!artists[track["Artist"]]) {
    artists[track["Artist"]] = {};
    let node = document.createElement("li");
    node.appendChild(document.createTextNode(obj.artist));
    let node2 = document.createElement("ul");
    node2.setAttribute('id', obj.artist);
    node.appendChild(node2);
    document.getElementById("artists").appendChild(node);
  }

  if (!artists[track["Artist"]][track["Album"]]) {
    artists[track["Artist"]][track["Album"]] = obj;
    let node = document.createElement("li");
    node.appendChild(document.createTextNode(obj.album));
    document.getElementById(obj.artist).appendChild(node);
  }
});

stream.pipe(parser);