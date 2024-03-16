/* declaracion de la variablle */
let mensajeSubtitulo="Incidenete en FGC";
let mensajeUsuario = "";

let valor1 = 0;
let valor2 = 0;
let sumaTotal = 0;

/* mensaje de alerta */
window.alert("Bienvenido a Javascript");

/* document.write("<h1> </h1>"); */

/* captura el elemento y añade contenido */
document.getElementById("titulo").innerHTML = "Bienvenido soy Christian";

/* Insertar contenido a partir de una variable */
document.getElementById("subtitulo").innerHTML = mensajeSubtitulo;

/* caputra un valor por teclado */
/* mensajeUsuario = window.prompt ("introduce un mensaje amigo"); */

/* valor1 = window.prompt("mensaje").innerHTML = mensajeUsuario; */

/* carga el valor de una variable */
document.getElementById("mensaje").innerHTML = mensajeUsuario

valor1 = number(window.prompt("Introduce el primer Numero"));
valor2 = number(window.prompt("Introduce el primer Numero"));

sumaTotal = valor1 + valor2;

tamanyLetra = Number(window.prompt("Tamaño Letra"));

document.getElementById("resultado") .innerHTML = sumaTotal;

document.getElementById("resultado") .sytle .fontSize= tamanyLetra+"px";
document.getElementById("resultado") .sytle .color="red";


