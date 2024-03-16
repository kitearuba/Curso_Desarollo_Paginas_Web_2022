/* window.alert("Buenas tardes esto es Javascript"); */
/* esto es un mensaje de alerta*/


/* finalidad almacenar informacion */
let valorA= 0;
let valorB= 0;
let valorC= 100;
let resultadoFinal = 0;

/* PROMPT -Captura el valor teclado */
valorA = Number(window.prompt("Introduce el Precio"));
valorB = Number(window.prompt("Introduce el Descuento"));

/* calcular la suma de valores capturados */
resultadoFinal =valorA * ((valorC-valorB)/100);

/* Mostar el resultado de la caja */
document.getElementById("resultado").innerHTML = resultadoFinal;
document.getElementById("resultado").style.fontSize ="120px";
document.getElementById("resultado").style.color ="blue";
document.getElementById("resultado").style.width ="12vw";
document.getElementById("resultado").style.height ="150px";
