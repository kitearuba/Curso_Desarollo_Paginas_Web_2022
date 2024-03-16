document.getElementById("mouse").onmouseover = function() {mouseOver()};
document.getElementById("mouse").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("mouse").style.color = "white";
  document.getElementById("mouse").style.backgroundColor = "green";
  document.getElementById("mouse").innerHTML= "Verde";
}

function mouseOut() {
   document.getElementById("mouse").style.color = "white";
   document.getElementById("mouse").style.backgroundColor = "red";
   document.getElementById("mouse").innerHTML= "Rojo";
}