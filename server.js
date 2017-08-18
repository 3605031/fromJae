const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var mongodb = require('mongodb');
var exphbs = require("express-handlebars");
//Stripe
var stripe = require("stripe")("sk_test_GWQwhFKlpRKUXR8MF7sikVBz");

//Logger ??
var morgan = require('morgan');

var cookieParser = require('cookie-parser');
var session = require('express-session');


var MongoClient = mongodb.MongoClient;






// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

//Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars")


//Look more into morgan**
//app.use(morgan('dev'));
//Cookie(not necessary, delete this later) and Express Session (Note that resave might affect performance/might not b necessary)
app.use(cookieParser());
app.use(session({secret: 'anystringoftext', saveUninitialized: true, resave:true}));

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


app.get("/api/:query?", function(req, res) {
    var chosen = req.params.query;
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


//Check Stock and price before adding to cart
app.get("/item/:name", function(req, res) {
    var chosen = req.params.name;
    var url = 'mongodb://Blake:Soithan1995@ds034677.mlab.com:34677/fromjae';
    MongoClient.connect(url, function(err, db) {
        if(err){
            console.log("can't connect",err)
        } else {
            //Connected
            console.log("connection established");
            //Get inventory collection
            var collection = db.collection('inventory');
            //Find all inside inventory
            collection.find({product_name:chosen }).toArray(function(error,result){
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
    
    
});

//*********Checkout*****************/
app.get("/checkout.html", function(req, res) {
    res.sendFile(path.join(__dirname, "checkout.html"));
});

app.get("/checkout2.html", function(req, res) {
    res.sendFile(path.join(__dirname, "checkout2.html"));
});


app.post("/payment", function(req, res) {
    var token = req.body.token_num;
    var order = 0;

});

