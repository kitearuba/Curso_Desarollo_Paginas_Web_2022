document.getElementById("anadir").addEventListener('click', agregar, false);
document.getElementById("extraer").addEventListener('click', extraervalor, false);


 var arrayEdades = []

function agregar(){

   varvalor = "";
   var valor = document.getElementById("valor").value;

   arrayEdades.push(valor);
}