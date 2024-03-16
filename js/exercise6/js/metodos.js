document.getElementById("tri").addEventListener('click', comparar, false);


function comparar(){

    var nombre = "";
    var edad = "";
    var salario = "";

    nombre = window.prompt("Introduce tu Nombre");
    edad = Number(window.prompt("Introduce edad"));
    salario = Number(window.prompt("Introduce sueldo"));
    
    
if (edad < 18 && salariio < 1000){
    
    solucion = "El Sr/Sra " + nombre + " es menor de edad y cobra menos de 1000€" ;
} 

if (edad < 18 && salario > 1000) {

    solucion = "El Sr/Sra " + nombre + " es menor de edad y cobra más de 1000€" ;
}

if (edad >= 18 && salario < 1000) {

    solucion = "El Sr/Sra " + nombre + " es mayor de edad y cobra menos de 1000€" ;
}
 if (edad >= 18 && salario > 1000) {

    solucion =  "El Sr/Sra " + nombre + " es mayor de edad y cobra más de 1000€" ;

    document.getElementById("seg").innerHTML =  solucion ;
}
}

    
