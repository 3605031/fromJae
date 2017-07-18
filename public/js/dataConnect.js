

$(document).ready(function() {
//Temporary Solution for Dom images load without handlebar/express
console.log("Im here");


    
 $.ajax({
        url: "/api/all",
        method: "GET"
      }).done(function(data) {
        $('.feature_item1').find('img').attr("src",data[3].url);
        $('.feature_item2').find('img').attr("src",data[3].url);
        console.log(data);
      })


// $.get('/api/all', function (data) {
//     $("#feature_title").text("testing featured");
//     $('.feature_item1').find('img').attr("src","images/tovar/women/boo.png");
//     $('.feature_item2').attr("src",data[1].url);
//     console.log(data[0].url);
//     console.log(data[1].url);
// });
    


});
