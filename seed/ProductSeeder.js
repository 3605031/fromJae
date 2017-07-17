var Product = require('../models/product');
var mongoose = require("mongoose");
mongoose.connect("localhost:27017/fromjae");

var products = [new Product({
    imageUrl : "https://c1.staticflickr.com/5/4323/35130481514_c353f99834_o.jpg",
    product_ID: 0001,
    product_name: "ChubbyCat",
    product_category: "Pin",
    price: 8.00,
    quantity: 3
}),new Product({
    imageUrl : "https://c1.staticflickr.com/5/4306/35970410695_d2ee762788_o.jpg",
    product_ID: 0002,
    product_name: "Avocuddle",
    product_category: "Pin",
    price: 8.00,
    quantity: 4
}),
new Product({
    imageUrl : "https://c1.staticflickr.com/5/4329/35970410725_c6a2b75f4d.jpg",
    product_ID: 0003,
    product_name: "Turtle",
    product_category: "Figurine",
    price: 17.50,
    quantity: 2
}),
new Product({
    imageUrl : "https://c1.staticflickr.com/5/4330/35970410935_14da55ebbd_o.jpg",
    product_ID: 0004,
    product_name: "Plantmon",
    product_category: "Figurine",
    price: 6.50,
    quantity: 5
})
];

// var done = 0;
// for(var i = 0; i < products.length;i++){
//     products[i].save(function(err,res){
//         done++;
//         if(done == products.length){
//             disConnect();
//         }
//     });
// }




function disConnect(){
    mongoose.disconnect();
}


