// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
require('./app/routing/htmlRoutes.js')(app, path);
require('./app/routing/apiRoutes.js')(app);
var PORT = 3000;

// Sets up the Express app to handle data parsing. You tell express to parse data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  