/* Declara variables */
    let valor1 = "";    
    let valor2 = "";
    let valor3 = "";

   
/* Cargar valores en las variables */

    valor1 = Number( window.prompt("Introduce el Primer número"));
    

    valor2 = Number( window.prompt("Introduce el Segundo número")); 
    

    valor3 = valor1 + valor2;


/* Mostrarlo por pantalla */
document.getElementById("pri").innerHTML = "Primer número:  " + valor1;
document.getElementById("seg").innerHTML = "Segundo número:  " + valor2 ;
document.getElementById("sum").innerHTML = "Suma total:  " + valor3 ;