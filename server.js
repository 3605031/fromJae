const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var mongoose = require("mongoose");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// === Connecting mongoose
mongoose.connect("localhost:27017/fromjae");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//Set up static files
app.use(express.static('public'));


//Express listening to port
app.listen(PORT, function() {
    console.log("express listening to", PORT)
});

//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});