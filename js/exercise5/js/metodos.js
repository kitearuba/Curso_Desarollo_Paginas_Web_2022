document.getElementById("pri").addEventListener('click', convertir, false);

const VALOR2 = "166.386";

function convertir(){

    let valor1 = "";
    
    let valor3 = "";


    valor1 = Number( window.prompt("Introduce la cantidad de Pesetas a convertir a Euro"));
    
    valor3 = (valor1 / VALOR2).toFixed(2) ; 
    
    
if (valor3 > 1000 ){

    document.getElementById("seg").style.backgroundColor = "green";
} 
else {

    document.getElementById("seg").style.backgroundColor = "red";
}
    
    /* Mostrarlo por pantalla */
    document.getElementById("seg").innerHTML = valor1 + " Pesetas son " + valor3 + "  Euro  "
    
}


    

    
