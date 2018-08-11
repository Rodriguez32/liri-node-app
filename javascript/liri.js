require("dotenv").config();
const fs = require("fs");
var keys = require("./keys.js");
var request = require("request");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var arg = process.argv
var command = "";


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
            console.log("");

            for(var i = 0; i < tweets.length; i++){
                console.log("roman_azalea: "+ tweets[i].text);
                console.log("Created: " + tweets[i].created_at);
                console.log("");
            }
        }
    });

    
}

myTweets();

//Spotify API

var spotifyThisSong = function(trackquery) {


    if(trackquery === undefined) {
        trackquery = "Hello,Goodbye"
    }

    spotify.search({ type: 'track', query: trackquery}, function(error,data){
        if(error){
            console.log("Error ocurred: " + error);
        
        } else {
            for(var i = 0; i < data.tracks.items[0].artists.length; i++){
                if(i === 0) {
                    console.log("Artist: " + data.tracks.items[0].artists.length.name);
                } else {
                    console.log( "         " + data.tracks.items[0].artists.lenght.name);
                }
            }
            console.log("Song:    " + data.tracks.items[0].artists.name);
            console.log("Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album:   " + data.tracks.items[0].album.name);


        }
    })
}

spotifyThisSong();


