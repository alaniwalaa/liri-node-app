require("dotenv").config();
// var spotify = new Spotify(keys.spotify);
// project variables 
var keys = require("./keys.js");
var axios = require("axios");
var spotify = require("spotify");
var fs = require("fs");
var liriReturn = process.argv[2];
var search = process.argv[3];
var movieThis = function (){
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie title is: " + response.data.Title );
    console.log(" The Rating is: " + response.data.Rated );
    console.log( " The Plot is: " + response.data.Plot);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
  
}
var concertThis = function() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(function(response){
    console.log("The Name of the Concert: " + response.data[0].venue.name);
    console.log("The Venue/City of the Concert: " + response.data[0].venue.city);
    console.log("The Date & Time of the Concert: " + response.data[0].datetime);
    });
}

var spotifyThisSong = function() {
exports.spotify = new spotify({
   id: process.env.d6418f094a9f42aeaa7794bc6c614b3c, 
   secret: process.env.cf5d02337f2f41f887f205d405ac3524
},
spotify.request("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx").then(function(data){
  
  console.log("The Name of the Concert: " + response.data);
  console.log("The Venue/City of the Concert: " + response.data[0].venue.city);
  console.log("The Date & Time of the Concert: " + response.data[0].datetime);

}));
var doWhatItSays = function(){
  var random = require("./random.txt");

}
.catch(function(err){
  console.err("Error occurred: " + err);
});

// switches for various commands 
switch(liriReturn) {
    case "movie-this":
    movieThis();
    break;
    case "concert-this":
    concertThis();
    break;
    case "spotify-this-song":
    spotifyThisSong();
    break;
    case "do-what-it-says":
    doWhatItSays();
    break; 
    
}
}
