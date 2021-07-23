
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
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
