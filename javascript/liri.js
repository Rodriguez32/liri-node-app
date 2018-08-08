console.log("This will work!!");

require("dotenv").config();

var keys = require("../javascript/keys");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

