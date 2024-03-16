document.getElementById("anadir").addEventListener('click', agregar, false);
document.getElementById("mostrar").addEventListener('click', extraervalor, false);

let arrayLen = [];

function agregar(){
   let valores = "";
   valores = document.getElementById("valor").value;
   arrayLen.push(valores);
   valor.value = '';
}
function extraervalor(){

   let resultado="";

   for(let i=0;i<arrayLen.length;i++){

      resultado+=arrayLen[i]+" - ";


   }
   resultado+="<br> Tamaño del array: "+arrayLen.length;


   document.getElementById("resultado").innerHTML = resultado;

}