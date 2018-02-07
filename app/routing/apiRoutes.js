// Dependencies 
var path = require("path");

// Import the list of friend entries
var friends = require("../data/friends.js");

// Exports API routes
// Search for Specific Friend (or all friends) - provides JSON
module.exports = function(app) {

    // Total list of friend entries
    app.get("/friends", function(req, res) {
        return res.json(friends);
    });   

    // Add new friend entry - takes in JSON input
    app.post("/friends", function(req, res) {

        // Takes the user input
        var userInput = req.body;
        console.log("userInput = " + JSON.stringify(userInput));
        console.log(userInput);

        // User Answers to survey questions
        var userAnswers = userInput.scores;
        console.log("userAnswers = " + userAnswers);

        // Find a match
        var matchName = " ";
        var matchImage = " ";
        var totalDifference = 10000; 

        // Loops through all existing friends in the list
        for (var i = 0; i < friends.length; i++) {
            console.log("friend = " + JSON.stringifyfriends[i]);

            // Differences for each question
            var diff = 0;
            for (var j = 0; j < userAnswers.length; j++){
                diff += Math.abs(friends[i].scores[j] - userAnswers[j]);

                console.log("diff = " + diff);

                // If there is a least amount of difference, then we found a match
                if ( diff < totalDifference) {
                    console.log("Closest match founc = " + diff);
                    console.log("Friend name = " + friends[i].name);
                    console.log("Friend image = " + friends[i].picture);

                    totalDifference = diff;
                    matchName = friends[i].name;
                    matchImage = friends[i].picture;
                }
            }
        }
    
        // Add new user into list of friends
        friends.push(newFriend);

        // Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

    });
}