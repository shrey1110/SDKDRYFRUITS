
  var coll = document.getElementsByClassName("collapsible");
  var i;
  var w_menu = document.getElementById("Menu_DryFruits");
  var x_menu = document.getElementById("Menu_Spices");
  var y_menu = document.getElementById("Menu_Grocery");
  var z_menu = document.getElementById("Menu_Seeds");
  var w_product = document.getElementById("Product_DryFruits");

  w_menu.nextElementSibling.style.display="block";
  w_product.style.display="block";

  {
    w_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

    x_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      w_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

    y_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      w_menu.nextElementSibling.style.display="none";
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

    z_menu.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      w_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      x_menu.nextElementSibling.style.display="none";
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }



  function myFunction(string) {
    var w = document.getElementById("Product_DryFruits");
    var x = document.getElementById("Product_Spices");
    var y = document.getElementById("Product_Grocery");
    var z = document.getElementById("Product_Seeds");
    if(string==="Product_DryFruits"){
      x.style.display="none";
      y.style.display="none";
      z.style.display="none";
      if (w.style.display === "block") {
        w.style.display = "none";
      } else {
        w.style.display = "block";
      }

    }
    if(string==="Product_Spices"){
      w.style.display="none";
      y.style.display="none";
      z.style.display="none";
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    if(string==="Product_Grocery"){
      w.style.display="none";
      x.style.display="none";
      z.style.display="none";
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
    }
    if(string==="Product_Seeds"){
      w.style.display="none";
      x.style.display="none";
      y.style.display="none";
      if (z.style.display === "block") {
        z.style.display = "none";
      } else {
        z.style.display = "block";
      }
    }

  }

  function titleProduct(string) {
    var w_menu = document.getElementById("Menu_DryFruits");
    var x_menu = document.getElementById("Menu_Spices");
    var y_menu = document.getElementById("Menu_Grocery");
    var z_menu = document.getElementById("Menu_Seeds");
    var w = document.getElementById("Product_DryFruits");
    var x = document.getElementById("Product_Spices");
    var y = document.getElementById("Product_Grocery");
    var z = document.getElementById("Product_Seeds");
    if(string==="Product_DryFruits"){
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      w_menu.nextElementSibling.style.display="block";
      x.style.display="none";
      y.style.display="none";
      z.style.display="none";
      w.style.display = "block";


    }
    if(string==="Product_Spices"){
      x_menu.nextElementSibling.style.display="block";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="none";
      w_menu.nextElementSibling.style.display="none";
      w.style.display="none";
      y.style.display="none";
      z.style.display="none";
      x.style.display = "block";

    }
    if(string==="Product_Grocery"){
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="none";
      y_menu.nextElementSibling.style.display="block";
      w_menu.nextElementSibling.style.display="none";
      w.style.display="none";
      x.style.display="none";
      z.style.display="none";
      y.style.display = "block";
    }
    if(string==="Product_Seeds"){
      x_menu.nextElementSibling.style.display="none";
      z_menu.nextElementSibling.style.display="block";
      y_menu.nextElementSibling.style.display="none";
      w_menu.nextElementSibling.style.display="none";
      w.style.display="none";
      x.style.display="none";
      y.style.display="none";
      z.style.display = "block";
    }

  }
