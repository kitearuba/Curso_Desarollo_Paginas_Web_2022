document.getElementById("tri").addEventListener('click', tabla, false);


function tabla(){

    var tab = 0;
    var len = 0;
    var i = 1;
    var solution1 = "";

    tab = Number(window.prompt("Introduce el numero de referencia de la tabla de multiplicar"));
    len = Number(window.prompt("Introduce valor hasta el que se debe multiplicar")); 
    
    
    
if (tab < 1 || tab > 20) {

    document.getElementById("seg").innerHTML = "Los números introducidos no cumplen los criterios" ;
} 

else if (len < 0 || len > 50) {
    
    document.getElementById("seg").innerHTML =  "Los números introducidos no cumplen los criterios";
}

else  { 

   
    for ( i = 1; i <= len; i++){
        solution1 += ( i + " * " + tab + " = " + (i * tab) + "<br>") ; 

    }

    document.getElementById("seg").innerHTML = "Tabla: " + tab + " Repeticiones: " + len + "<br>" + solution1;

}
}
