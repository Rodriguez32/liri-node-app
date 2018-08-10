require("dotenv").config();

var keys = require("../javascript/keys.js");


var client = new Twitter(keys.twitter);

var myTweets = function() {
    var Twitter = require("twitter");

}

var params = {
    screen_name: "roman_azalea",
    count: 20
};

client.get("https://twitter.com/roman_azalea",params,function(error,tweets,response){
    if (error){
        console.log("Error Ocurred");
        } else {
            console.log("My 20 Most Recent Tweets");
            console.log("");
        }
});

myTweets();


var spotify = new Spotify(keys.spotify);

// // The output does show what it says in random.txt
// var fs = require("fs");

// var data = fs.readFileSync("../random.txt");

// console.log(data.toString());
// console.log("Program Ended");

