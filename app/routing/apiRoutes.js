// Routes to display JSON of all friends & handle survey results (POST)

// Search for Specific Friend (or all friends) - provides JSON
module.exports = function(app) {
    app.get("/friends/:who?", function(req, res) {
        return res.json(friends); //display the full list of Friends
    });   

    // Create New Friends - takes in JSON input
    app.post("/friends", function(req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);
    
        friends.push(newFriend);
    
        res.json(newFriend);
    });
}