require("dotenv").config();
const fs = require("fs");
var keys = require("./keys.js");
var request = require("request");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


//Twitter API
var myTweets = function () {

   
    var params = {
        user_id: "@roman_azalea",
        count: 20
    };

    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (error) {
            console.log("Error Ocurred " + error);
        } else {
            console.log("My 20 Most Recent Tweets");
            console.log(tweets);
        }
    });

    
}

myTweets();

//Spotify API


// var spotify = new Spotify(keys.spotify);












