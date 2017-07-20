

$(document).ready(function() {
  //Temporary Solution for Dom images load without React
  
  function localLength(arr){

  }
  
  //FEATURED ITEM data attachments
  function updatePage(){   
    $.ajax({
      url: "/api/all",
      method: "GET"
    }).done(function(data) {
      
      for(var i=0; i < 8; i++){
        
        $('.feature_item'+i).find('img').attr("src",data[i].url);
        $('.feature_item_title'+i).html(data[i].product_name);
        $('.feature_item_price'+i).html("$"+parseFloat(Math.round(data[i].price * 100) / 100).toFixed(2));
        $('.feature_item_quantity'+i).html("Quantity: "+data[i].quantity);
      };
    });
  }
  
  updatePage();
  //Adding Items to Shopping Bag from Featured Item and saving data to local storage
  
  $(".add_bag").click(function(){
    var item_name = $(this).parent().parent().parent().find(".tovar_description").find(".tovar_title").text().trim();
    var item_quantity = $(this).parent().parent().parent().find(".tovar_description").find(".tovar_quantity").text().trim();
    item_quantity = parseInt(item_quantity.replace(/[^0-9\.]/g, ''), 10);
    if(item_quantity>0){
      $(this).parent().parent().parent().find(".tovar_description").find(".tovar_quantity").text("Quantity: "+(item_quantity-1));
      var bagnum = parseInt($("#bagquantity").text());
      bagnum++;
      $("#bagquantity").text(bagnum);
    }
    $.ajax({
      url: "/item/"+item_name,
      method: "GET"
    }).done(function(data) {
      if(item_quantity == 0){
        Materialize.toast("Sorry! Seems we're out of stock. Check back later", 3000);
      }
      //Double check quantity from server 
      else if(data[0].quantity==0) {
        Materialize.toast("Sorry! Seems we're out of stock. Check back later", 3000);
      }
      else if(data[0].quantity>0){
        Materialize.toast('Added to Cart!', 2000);
        var localcart = localStorage.getItem("cart");
        if(localcart == undefined){
          var a = [{name:data[0].product_name,quantity:data[0].quantity}];
          localStorage.setItem('cart', JSON.stringify(a));
        } else {
          var a = []
          a = JSON.parse(localStorage.getItem("cart"));
          console.log(a.length);
          var done = false;
          for(var i = 0; i < a.length; a++){
            if(a[i].name ==data[0].product_name ){
              a[i].quantity++;
              done = true;
            }
          }
          if(!done){
          a.push({name:data[0].product_name,quantity:data[0].quantity});
          localStorage.setItem('cart',JSON.stringify(a));
          }
        }
      }
    });
  })
  
  
  
});
