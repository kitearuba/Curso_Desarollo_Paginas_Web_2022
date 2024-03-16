document.getElementById("tri").addEventListener('click', comparar, false);


function comparar(){

    var valor1 = "";
    var valor2 = "";
    var valor3 = "";
    var valor4 = "";

    valor1 = window.prompt("Introduce el Nombre del Producto");
    valor2 = Number(window.prompt("Introduce  el Precio"));
    
    
if (valor2 < 0 || valor2 > 1000){

    document.getElementById("seg").innerHTML =  "Introducir un Precio valido!" ;
} 
else if (valor2 <= 1000 && valor2 > 200) {

    valor3 = valor2 * .75

    document.getElementById("seg").innerHTML =   "El producto " + valor1 + " tiene un descuento del 25% y el total a pagar es de " + valor3 ;
}
else if (valor2 <= 200) {

    valor4 = valor2 * .9

    document.getElementById("seg").innerHTML =   "El producto " + valor1 + " tiene un descuento del 10% y el total a pagar es de " + valor4 ;
}
}