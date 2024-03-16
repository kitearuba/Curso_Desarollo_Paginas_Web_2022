/* window.alert("Buenas tardes esto es Javascript"); */
/* esto es un mensaje de alerta*/


/* finalidad almacenar informacion */
let valorA= 0;
let resultadoFinal = 0;

/* PROMPT -Captura el valor teclado */
valorA = Number(window.prompt("Introduce el Resultado"));

if (valorA < 5 && valorA > 0) { 
    resultadoFinal = "No Approvado";
} else if (valorA > 4.99 && valorA < 10) {
    resultadoFinal = "Approvado";
} else {
    resultadoFinal = "Valor no valido";
}



/* Mostar el resultado de la caja */
document.getElementById("resultado").innerHTML = resultadoFinal;
document.getElementById("resultado").style.fontSize ="120px";
document.getElementById("resultado").style.color ="blue";
document.getElementById("resultado").style.width ="12vw";
document.getElementById("resultado").style.height ="150px";
 