var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://heroku_8jhz997c:l45ds21ar26nhqutcvglrjftq3@ds161742.mlab.com:61742/heroku_8jhz997c';

var item = {
    title: "test2",
    content: "test2",
    author: "test2"
};



MongoClient.connect(url, function(err, db) {
    if(err){
        console.log("can't connect")
    } else {
        console.log("connection established")
        var collection = db.collection('students');
        collection.insert([item],function(err,result){
            if(err){
                console.log(err);
            }
        });
            //Close connection
            db.close();
    }
});

console.log("hello")