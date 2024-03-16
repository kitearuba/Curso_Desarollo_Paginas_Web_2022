document.getElementById("tri").addEventListener('click', comparar, false);


function comparar(){

    var valor1 = "";

    valor1 = Number(window.prompt("Introduce el precio del producto"));
    
    
if (valor1 > 100 ){
    document.getElementById("segb").innerHTML =  " El precio de ";
    document.getElementById("seg").innerHTML =  " " + valor1 + " € "  ;
    document.getElementById("sega").innerHTML =  " " + " es Superior a 100€ ";
} 
else if (valor1 < 100 ){

    document.getElementById("segb").innerHTML =  " El precio de ";
    document.getElementById("seg").innerHTML =   " " + valor1 + " € "  ;
    document.getElementById("sega").innerHTML =  " " + " es Inferior a 100€ ";
}
else if (valor1 == 100 ) {    

    document.getElementById("segb").innerHTML =  " El precio de ";
    document.getElementById("seg").innerHTML =   " " + valor1 + " € " ;
    document.getElementById("sega").innerHTML =  " " + " es Igual a 100€ ";
} 
  
}