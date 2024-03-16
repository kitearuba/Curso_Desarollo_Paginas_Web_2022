document.getElementById("calcular").addEventListener('click', capturar, false);




function capturar(){

   var precios = Number(document.getElementById("precio").value);
   var descuentos = Number(document.getElementById("descuento").value);
   var result = "";
   var solucion = "";

    precios - (precios * (descuentos / 100));
   
   if ( isNaN(precios) || isNaN(descuentos)){
      alert("Ingresa valores validos")
      precio.value = '';
      descuento.value = '';
   }
   
   else {

      result = preciofinal( precios , descuentos);
   }

   document.getElementById("resultado").innerHTML = result;
} 
function preciofinal(valor1 , valor2){
   var r = 0;
   r = valor1 - (valor1 * (valor2 / 100));
   return r .toFixed(4);
}