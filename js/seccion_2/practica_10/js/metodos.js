document.getElementById("tri").addEventListener('click', comparar, false);


function comparar(){

    var valor1 = "";

    valor1 = Number(window.prompt("Introduce un Numero"));
    
    
if (valor1 < 0 || valor1 > 100){

    document.getElementById("seg").innerHTML =  valor1 + " : Número erróneo"  ;
} 
else if (valor1 < 50 || valor1 % 2 == 1) {

    document.getElementById("seg").innerHTML =   valor1 + " : NO cumple con algún criterio" ;
}
 else if (valor1 >=50 || valor1 % 2 == 0 ) {    

    document.getElementById("seg").innerHTML =   valor1 +  " : Número correcto" ;
} 
  
}