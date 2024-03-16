/* window.alert("Buenas tardes esto es Javascript"); */
/* esto es un mensaje de alerta*/


/* finalidad almacenar informacion */
let valorA= 0;
let valorB= 0;
let valorC= 0;
let valorD= 0;
let valorE= 0;

let resultadoFinal = 0;

/* PROMPT -Captura el valor teclado */
valorA = Number(window.prompt("Introduce el Valor"));
valorB = Number(window.prompt("Introduce el Valor"));
valorC = Number(window.prompt("Introduce el Valor"));
valorD = Number(window.prompt("Introduce el Valor"));
valorE = Number(window.prompt("Introduce el Valor"));

/* calcular la suma de valores capturados */
resultadoFinal = (valorA+valorB+valorC+valorD+valorE)/5;

/* Mostar el resultado de la caja */
document.getElementById("resultado").innerHTML = resultadoFinal;
document.getElementById("resultado").style.fontSize ="120px";
document.getElementById("resultado").style.color ="blue";
document.getElementById("resultado").style.width ="12vw";
document.getElementById("resultado").style.height ="150px";

/*  Declara variables
let num1 = 0;    
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;

 Cargar valores en las variables

num1 = Number(window.prompt("Introduce el numero 1"));    
num2 = Number(window.prompt("Introduce el numero 2")); 
num3 = Number(window.prompt("Introduce el numero 3")); 
num4 = Number(window.prompt("Introduce el numero 4")); 
num5 = Number(window.prompt("Introduce el numero 5")); 

 Realizar el promedio

resultadoFinal = (num1 + num2 +num3 + num4 + num5)/5;

 Mostrarlo por pantalla
document.getElementById("resultado").innerHTML = resultadoFinal; */