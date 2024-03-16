document.getElementById("quin").addEventListener('click', valores, false);

/* document.getElementById("tri").addEventListener('click', suma, false);
document.getElementById("cua").addEventListener('click', producto, false); */

function valores(){

    let valor1 = "";
    let valor2 = "";
    let valor3 = "";
    let valor4 = "";

    valor1 = Number( window.prompt("Introduce el primer valor"));
    valor2 = Number( window.prompt("Introduce el segundo valor"));

    valor3 = valor1 + valor2 ;

    valor4 = valor1 * valor2 ;
    
    
    /* Mostrarlo por pantalla */
    document.getElementById("seg").innerHTML = "Los valores introducidos son: " + valor1 + "  y  " + valor2;
    document.getElementById("tri").innerHTML = "La suma de los valores es:  " + valor3 ;
    document.getElementById("cua").innerHTML = "El producto de los valores es:  " + valor4 ;
}


    

    
