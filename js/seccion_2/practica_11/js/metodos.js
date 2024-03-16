document.getElementById("tri").addEventListener('click', comparar, false);


function comparar(){

    var valor1 = "";
    var valor2 = "";
    var valor3 = "";

    valor1 = window.prompt("Introduce tu Nombre");
    valor2 = Number(window.prompt("Introduce edad"));
    valor3 = Number(window.prompt("Introduce sueldo"));
    
    
if (valor2 < 18 && valor3 < 1000){

    document.getElementById("seg").innerHTML =  "El Sr/Sra " + valor1 + " es menor de edad y cobra menos de 1000€" ;
} 
else if (valor2 < 18 && valor3 > 1000) {

    document.getElementById("seg").innerHTML =   "El Sr/Sra " + valor1 + " es menor de edad y cobra más de 1000€" ;
}
else if (valor2 >= 18 && valor3 < 1000) {

    document.getElementById("seg").innerHTML =   "El Sr/Sra " + valor1 + " es mayor de edad y cobra menos de 1000€" ;
}
else if (valor2 >= 18 && valor3 > 1000) {

    document.getElementById("seg").innerHTML =   "El Sr/Sra " + valor1 + " es mayor de edad y cobra más de 1000€" ;
}
  
}