/* Declara variables */
    let num1 = 0;    
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;

/* Cargar valores en las variables */

    num1 = Number(window.prompt("Introduce el numero 1"));    
    num2 = Number(window.prompt("Introduce el numero 2")); 
    num3 = Number(window.prompt("Introduce el numero 3")); 
    num4 = Number(window.prompt("Introduce el numero 4")); 
    num5 = Number(window.prompt("Introduce el numero 5")); 

/* Realizar el promedio */

resultadoFinal = (num1 + num2 +num3 + num4 + num5)/5;

/* Mostrarlo por pantalla */
document.getElementById("resultado").innerHTML = resultadoFinal;