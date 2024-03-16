/* Declara variables */
    let valor1 = "";    
    let valor2 = "";
    let valor3 = "";

   
/* Cargar valores en las variables */

    valor1 = Number( window.prompt("Introduce el precio"));
    

    valor2 = Number( window.prompt("Introduce el porcentaje de descuento")); 
    

    valor3 = valor1 * ((100 - valor2) / 100);


/* Mostrarlo por pantalla */
document.getElementById("pri").innerHTML = "Precio producto:  " + valor1;
document.getElementById("seg").innerHTML = " Descuento aplicado:   " + valor2 ;
document.getElementById("sum").innerHTML = " El precio final del producto es:  " + valor3 ;
alert(" El precio final del producto es:  " + valor3 );