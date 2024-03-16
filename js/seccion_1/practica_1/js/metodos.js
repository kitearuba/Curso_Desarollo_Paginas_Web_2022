/* Declara variables */
    let valor1 = "";    
    let valor2 = "";
    let valor3 = "";

/* Cargar valores en las variables */

    valor1 = window.prompt("Introduce el Nombre del Curso");    
    valor2 = window.prompt("Introduce el Nombre del Alumno"); 
    valor3 = window.prompt("Introduce tu Horario (Mañana / Tarde"); 


/* Mostrarlo por pantalla */
document.getElementById("curso").innerHTML = valor1 ;
document.getElementById("nombre").innerHTML = valor2 ;
document.getElementById("horario").innerHTML =valor3 ;