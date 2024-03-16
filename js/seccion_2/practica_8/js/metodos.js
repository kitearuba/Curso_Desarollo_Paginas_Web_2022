document.getElementById("cua").addEventListener('click', comparar, false);


function comparar(){

    let valor1 = "";
    let valor2 = "";


    valor1 = window.prompt("Introduce la primera palabra");
    valor2 = window.prompt("Introduce la segunda palabra");
    
    
if (valor1 == valor2 ){

    document.getElementById("seg").innerHTML = " PALABRAS IGUALES";
    document.getElementById("tri").innerHTML = " Las palabras " + valor1 + " y "  + valor2 + " introducidas son Iguales";
} 
else {

    document.getElementById("seg").innerHTML = " PALABRAS DIFERENTES";
    document.getElementById("tri").innerHTML = " Las palabras " + valor1 + " y "  + valor2 + " introducidas son Diferentes";
}
    
    /* Mostrarlo por pantalla */
    document.getElementById("seg").innerHTML = valor1 + " Pesetas son " + valor3 + "  Euro  "
    
}
    

    
