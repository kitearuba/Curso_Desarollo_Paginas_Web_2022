/* Declara variables */
var a = "";    
var b = "";
var c = "";

/* Cargar valores en las variables */

a = window.prompt("Introduce tu nombre");    
b = window.prompt("Introduce la cuidad de donde eres"); 
c = window.prompt("Introduce tu correo electronico"); 


/* Mostrarlo por pantalla */
document.getElementById("prac2").innerHTML = "Mi nombre es " + a + ", soy de " + b + " y mi correo electronico es " +c;


