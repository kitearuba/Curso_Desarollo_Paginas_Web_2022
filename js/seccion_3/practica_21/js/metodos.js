document.getElementById("calcular").addEventListener('click', verificar, false);


function verificar(){

   let radio = Number(document.getElementById("radioo").value);
   let sup = 0;
   let vol = 0;
   let result = "";

   if( isNaN(radio)){
      alert("Introduce un valor valido");
      radioo.value = '';

   }
   
   else{
      sup = superficie (radio);
      vol = volumen (radio);
      result = imprimir (sup , vol)
   }

}

function superficie(r){
   let a = 0;
   a = 4 * ((3.14) * (r*r));
   return a;
}

function volumen(r){
   let v = 0;
   v = ((4/3)*(3.14)*(r*r*r))
   return v;
}
function imprimir(valor1, valor2){
   
   document.getElementById("area").innerHTML = valor1;
   document.getElementById("volumen").innerHTML = valor2;
   radioo.value = '';
}
    
    
