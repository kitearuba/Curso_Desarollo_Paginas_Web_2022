document.getElementById("tri").addEventListener('click', comparar, false);


function comparar(){

    var valor1 = "";
    var valor2 = "";
    

    valor1 = window.prompt("Introduce tu Nombre");
    valor2 = Number(window.prompt("Introduce tu edad"));
    
    
if (valor2 <= 0 || valor2 > 110){

    document.getElementById("seg").innerHTML =  " Edad Incorrecta!" ;
} 
else if (valor2 > 0 && valor2 < 18) {
    
    document.getElementById("seg").innerHTML =   "El señor " + valor1 + " tiene " + valor2 + " años y es una persona menor de edad.";
}
else if (valor2 <= 18 || valor2 <= 65) {

    document.getElementById("seg").innerHTML =   "El señor " + valor1 + " tiene " + valor2 + " años y se considera un trabajador en activo.";
}
else if (valor2 > 65 && valor2 <= 110) {

    document.getElementById("seg").innerHTML =   "El señor " + valor1 + " tiene " + valor2 + " años y su situación actual laboral es Jubilado" ;
}
}