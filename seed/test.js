var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://Blake:Soithan1995@ds034677.mlab.com:34677/fromjae';

var products = [
    {
        url : "https://c1.staticflickr.com/5/4323/35130481514_c353f99834_o.jpg",
        catalognum: 1,
        product_name: "ChubbyCat",
        product_category: "Pin",
        price: 8.00,
        quantity: 3
    },
    {
        url : "https://c1.staticflickr.com/5/4306/35970410695_d2ee762788_o.jpg",
        catalognum: 2,
        product_name: "Avocuddle",
        product_category: "Pin",
        price: 8.00,
        quantity: 4
    },{
        url : "https://c1.staticflickr.com/5/4329/35970410725_c6a2b75f4d.jpg",
        catalognum: 3,
        product_name: "Turtle",
        product_category: "Figurine",
        price: 17.50,
        quantity: 2
    },{
        url : "https://c1.staticflickr.com/5/4330/35970410935_14da55ebbd_o.jpg",
        catalognum: 4,
        product_name: "Plantmon",
        product_category: "Figurine",
        price: 6.50,
        quantity: 5
    },{
        url : "https://c1.staticflickr.com/5/4301/35844871151_3fd96b4943.jpg",
        catalognum: 5,
        product_name: "Chesire",
        product_category: "Figurine",
        price: 96.00,
        quantity: 2
    },{
        url : "https://c1.staticflickr.com/5/4326/35936182486_b6a2386649.jpg",
        catalognum: 6,
        product_name: "Twin Fish",
        product_category: "Jewelry",
        price: 36.00,
        quantity: 7
    },{
        url : "https://c1.staticflickr.com/5/4291/35137642724_9cf71443bd.jpg",
        catalognum: 7,
        product_name: "Pink Fins Mermeow",
        product_category: "Figurine",
        price: 86.00,
        quantity: 1
    },{
        url : "https://c1.staticflickr.com/5/4314/35977510425_9b697c2440.jpg",
        catalognum: 8,
        product_name: "Teal Fins Mermeow",
        product_category: "Figurine",
        price: 87.50,
        quantity: 2
    },{
        url : "https://c1.staticflickr.com/5/4310/35167318703_bb18d7a7df.jpg",
        catalognum: 9,
        product_name: "Mini Bun",
        product_category: "Figurine",
        price: 19.99,
        quantity: 20
    },{
        url : "https://c1.staticflickr.com/5/4307/35806936992_6ae92da2ed.jpg",
        catalognum: 10,
        product_name: "Hedgeberries",
        product_category: "Figurine",
        price: 41.50,
        quantity: 4
    },{
        url : "https://c1.staticflickr.com/5/4291/35167302983_633e625585.jpg",
        catalognum: 11,
        product_name: "Hedgehog",
        product_category: "Figurine",
        price: 38.90,
        quantity: 18
    },{
        url : "https://c1.staticflickr.com/5/4302/35806935642_073b5b6cd9.jpg",
        catalognum: 12,
        product_name: "Cacti Hedgies",
        product_category: "Figurine",
        price: 48.70,
        quantity: 12
    },{
        url : "https://c1.staticflickr.com/5/4294/35167295313_eac41ba5f7.jpg",
        catalognum: 13,
        product_name: "Gemstone Turtle: Love Vines",
        product_category: "Figurine",
        price: 30.10,
        quantity: 3
    },{
        url : "https://c1.staticflickr.com/5/4310/35977434105_9b72445c3c.jpg",
        catalognum: 14,
        product_name: "Gemstone Turtle: Galactic",
        product_category: "Figurine",
        price: 32.50,
        quantity: 1
    },{
        url : "https://c1.staticflickr.com/5/4313/35844747031_d7bbfae3e2.jpg",
        catalognum: 15,
        product_name: "Dreamscape Whale",
        product_category: "Figurine",
        price: 176.00,
        quantity: 1
    },{
        url : "https://c1.staticflickr.com/5/4306/35167215523_16b182c5e2.jpg",
        catalognum: 16,
        product_name: "Space Funnies",
        product_category: "Figurine",
        price: 136.00,
        quantity: 1
    },{
        url : "https://c1.staticflickr.com/5/4306/35167874673_d8c705994c.jpg",
        catalognum: 17,
        product_name: "Holo Turtle Choker",
        product_category: "Jewelry",
        price: 31.00,
        quantity: 4
    },{
        url : "https://c1.staticflickr.com/5/4321/35167879643_7565f1acf7.jpg",
        catalognum: 18,
        product_name: "Mini Turtles",
        product_category: "Jewelry",
        price: 36.50,
        quantity: 42
    },{
        url : "https://c1.staticflickr.com/5/4330/35588929120_490327bf02.jpg",
        catalognum: 19,
        product_name: "Spring Ray",
        product_category: "Figurine",
        price: 86.00,
        quantity: 2
    },{
        url : "https://c1.staticflickr.com/5/4330/35970410935_14da55ebbd_o.jpg",
        catalognum: 20,
        product_name: "Amethyst Bunny",
        product_category: "Figurine",
        price: 99.50,
        quantity: 4
    }
    
];



MongoClient.connect(url, function(err, db) {
    if(err){
        console.log("can't connect")
    } else {
        console.log("connection established")
        var collection = db.collection('inventory');
        for(var i=0;i<products.length;i++){
            collection.insert(products[i],function(err,result){
                if(err){
                    console.log(err);
                }
            });
        };
        //Close connection
        db.close();
    }
});

console.log("hello")


 async.parallel([
      function(callback){ 

      },
      function(callback){

      }
    ]