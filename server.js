const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;




// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// === Connecting mongoose
// mongoose.connect("localhost:27017/fromjae");


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
app.listen(port, function() {
    console.log("express listening to", port)
});

//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});

var products;
app.get("/api/:query?", function(req, res) {
    let chosen = req.params.query;
    //Temporary solution without knowing React + Handlebars
    var url = 'mongodb://Blake:Soithan1995@ds034677.mlab.com:34677/fromjae';
    switch(chosen){
        case "all":
        MongoClient.connect(url, function(err, db) {
            if(err){
                console.log("can't connect",err)
            } else {
                //Connected
                console.log("connection established");
                //Get inventory collection
                var collection = db.collection('inventory');
                //Find all inside inventory
                collection.find({}).toArray(function(error,result){
                    if(error){
                        res.send(error);
                    } else if (result.length){
                        res.json(result);
                    } else {
                        res.send('nothing is found');
                    }
                });
                //Close connection
                db.close();
            }
        })
        break;
    }
});




                            