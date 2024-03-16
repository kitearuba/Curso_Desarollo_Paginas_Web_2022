/* window.alert("Buenas tardes esto es Javascript"); */
/* esto es un mensaje de alerta*/


/* finalidad almacenar informacion */
let valorA= 0;
let valorB= 0;
let resultadoFinal = 0;

/* PROMPT -Captura el valor teclado */
valorA = Number(window.prompt("Introduce el primer numero"));
valorB = Number(window.prompt("Introduce el segundo numero"));

/* calcular la suma de valores capturados */
resultadoFinal = valorA + valorB;

/* Mostar el resultado de la caja */
document.getElementById("resultado").innerHTML = resultadoFinal;
document.getElementById("resultado").style.fontSize ="100px";
document.getElementById("resultado").style.color ="red";
document.getElementById("resultado").style.width ="10vw";
document.getElementById("resultado").style.height ="150px";
document.getElementById("resultado").style.border ="2px solid black";
