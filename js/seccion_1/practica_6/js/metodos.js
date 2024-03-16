/* Declara variables */
    let valor1 = "";    
    let valor2 = "";
    let valor3 = "";

   
/* Cargar valores en las variables */

    valor1 = Number( window.prompt("Introduce la altura en centimetros"));
    

    valor2 = Number( window.prompt("Introduce la base en centimetros")); 
    

    valor3 = (valor1 * valor2) / 2;

    
/* Mostrarlo por pantalla */
document.getElementById("seg").innerHTML = "Altura:  " + valor1;
document.getElementById("tri").innerHTML = "Base:  " + valor2 ;
document.getElementById("sum").innerHTML = "Superficie Triángulo:  " + valor3 + " centimetros";