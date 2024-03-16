/* Declara variables */
    let valor1 = "";    
    let valor2 = "";
    let valor3 = "";

/* Cargar valores en las variables */

    valor1 = window.prompt("Introduce el Nombre del Alumno");    
    valor2 = window.prompt("Introduce el Curso"); 
    valor3 = window.prompt("Introduce la Nota"); 


/* Mostrarlo por pantalla */
document.getElementById("nam").innerHTML = "Nombre:  " + valor1;
document.getElementById("cur").innerHTML = "Curso:  " + valor2 ;
document.getElementById("not").innerHTML = "Nota:  " + valor3 ;