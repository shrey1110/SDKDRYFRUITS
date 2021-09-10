
  var coll = document.getElementsByClassName("collapsible");
  var i;
  var w_menu = document.getElementById("Menu_DryFruits");
  var x_menu = document.getElementById("Menu_Spices");
  var y_menu = document.getElementById("Menu_Grocery");
  var z_menu = document.getElementById("Menu_Seeds");
  var w_product = document.getElementById("Product_DryFruits");
  var x_product = document.getElementById("Product_Spices");
  var y_product = document.getElementById("Product_Grocery");
  var z_product = document.getElementById("Product_Seeds");
  var almonds = document.getElementById("Almonds");
  var cashews = document.getElementById("Cashew");
  var blackpepper = document.getElementById("Black-Pepper");
  var products = document.getElementsByClassName("product-details");
  var blank = document.getElementById("blank");

  w_menu.nextElementSibling.style.display="block";
  w_product.style.display="block";




  {

    w_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      blank.style.display="none";
      y_product.style.display="none";
      x_product.style.display="none";
      z_product.style.display="none";
      for(let i =0; i<products.length;i++)
        products[i].style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
        w_product.style.display = "none";
      } else {
        content.style.display = "block";
        w_product.style.display = "block";

      }
      if(x_menu.nextElementSibling.style.display=="none" && w_menu.nextElementSibling.style.display=="none" && z_menu.nextElementSibling.style.display=="none" && y_menu.nextElementSibling.style.display=="none")
          blank.style.display="block";
    });

    x_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      w_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      blank.style.display="none";
      y_product.style.display="none";
      w_product.style.display="none";
      z_product.style.display="none";
      for(var i =0; i<products.length;i++)
        products[i].style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
        x_product.style.display="none";
      } else {
        content.style.display = "block";
        x_product.style.display="block";
      }
      if(x_menu.nextElementSibling.style.display=="none" && w_menu.nextElementSibling.style.display=="none" && z_menu.nextElementSibling.style.display=="none" && y_menu.nextElementSibling.style.display=="none")
          blank.style.display="block";
    });

    y_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      w_menu.nextElementSibling.style.display="none";
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      blank.style.display="none";
      x_product.style.display="none";
      w_product.style.display="none";
      z_product.style.display="none";
      for(var i =0; i<products.length;i++)
        products[i].style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
        y_product.style.display="none";
      } else {
        content.style.display = "block";
        y_product.style.display="block";
      }
      if(x_menu.nextElementSibling.style.display=="none" && w_menu.nextElementSibling.style.display=="none" && z_menu.nextElementSibling.style.display=="none" && y_menu.nextElementSibling.style.display=="none")
          blank.style.display="block";
    });

    z_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      w_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      x_menu.nextElementSibling.style.display="none";
      blank.style.display="none";
      x_product.style.display="none";
      w_product.style.display="none";
      y_product.style.display="none";
      for(var i =0; i<products.length;i++)
        products[i].style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
        z_product.style.display="none";
      } else {
        content.style.display = "block";
        z_product.style.display="block";
      }
      if(x_menu.nextElementSibling.style.display=="none" && w_menu.nextElementSibling.style.display=="none" && z_menu.nextElementSibling.style.display=="none" && y_menu.nextElementSibling.style.display=="none")
          blank.style.display="block";
    });
  }



  function getDryFruits(string){
    for(var i =0; i<coll.length;i++)
      coll[i].nextElementSibling.style.display="none";
      for(var i =0; i<products.length;i++)
        products[i].style.display="none";
      w_product.style.display="none";
      y_product.style.display="none";
      x_product.style.display="none";
      z_product.style.display="none";
    if(string === "Almonds"){
      w_menu.nextElementSibling.style.display="block";
      almonds.style.display="block";
    }
    if(string === "Cashew"){
      w_menu.nextElementSibling.style.display="block";
      cashews.style.display="block";
    }
    if(string === "Black-Pepper"){
      x_menu.nextElementSibling.style.display="block";
      blackpepper.style.display="block";
    }

  }
