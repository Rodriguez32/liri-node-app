require("dotenv").config();
const fs = require("fs");
var keys = require("./keys.js");
var request = require("request");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var args = process.argv;
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

// OMBD MOVIE//

var movieThis = function(movieQuery) {
    
    if (movieQuery === undefined) {
        movieQuery = "mr.nobody";
    }

    request("http://www.ombdapi.com/?t=" + movieThis + "&y=&plot=short&apikey=trilogy", function(error,response,body){
        if(!error && response.statusCode === 200) {
            console.log("Title of the movie: " + JSON.parse(body).Title);
            console.log("Year the movie came out: " + JSON.parse(body).Year);
            console.log("IDMB Rating of the movie: " + JSON.parse(body).imdbRating);
            console.log("Country Produced: " + JSON.parse(body).Country);
            console.log("Language of the movie: " + JSON.parse(body).Language);
            console.log("Plot of the movie: " + JSON.parse(body).Plot);
            console.log("Actors in the movie: " + JSON.parse(body).Actors);
        
        for(var i=0; i <JSON.parse(body).Ratings.length; i++){
            if(JSON.parse(body).Ratings[i].Source === "My Sister's Keeper") {
                console.log("My Sister's Keeper Rating: " + JSON.parse(body).Ratings[i].Value);
                if(JSON.parse(body).Ratings[i].Website !== undefined){
                    console.log("My Sister's Keeper URL: " + JSON.parse(body).Ratings[i].Website);
                }
            }
        }
        
        }

    });
}

// if(command === "my-tweets") {
// 	myTweets();
// } else if(command === "spotify-this-song") {
// 	spotifyThisSong(args);
// } else if(command === "movie-this") {
// 	movieThis(args);
// } else if(command === "do-what-it-says");
