document.getElementById("a_delante").addEventListener('click', agregar_a, false);
document.getElementById("a_detras").addEventListener('click', agregar_b, false);
document.getElementById("e_delante").addEventListener('click', eliminar_a, false);
document.getElementById("e_detras").addEventListener('click', eliminar_b, false);
document.getElementById("reset").addEventListener('click', restaurar, false);
document.getElementById("elimina").addEventListener('click', eliminar, false);

var arrayPn = [];
   

function agregar_a(){
   let valora = "";
   let r = "";
   valora = document.getElementById("valor").value;
   arrayPn.unshift(valora);
   r = extraervalor();
   document.getElementById("ultimoa").innerHTML = valora;
   document.getElementById("valores").innerHTML = r;
   valor.value = '';
}

function agregar_b(){
   let valora = "";
   let r = "";
   valora = document.getElementById("valor").value;
   arrayPn.push(valora);
   r = extraervalor();
   document.getElementById("ultimoa").innerHTML = valora;
   document.getElementById("valores").innerHTML = r;
   valor.value = '';
}

function eliminar_a(){
   let ex = "";
   let r = "";
   
   ex = arrayPn.shift();
   r = extraervalor();
   document.getElementById("ultimoe").innerHTML = ex;
   document.getElementById("valores").innerHTML = r;
}

function eliminar_b(){
   let ex = "";
   let r = "";

   ex = arrayPn.pop();
   r = extraervalor();
   document.getElementById("ultimoe").innerHTML = ex;
   document.getElementById("valores").innerHTML = r;
  
}

function extraervalor(){

   let resultado="";

   for(let i=0;i<arrayPn.length;i++){
      resultado+=arrayPn[i]+" - ";
   }
   return resultado;
}
function restaurar(){
   let r = "";

   
   arrayPn = [];
   r = extraervalor();
   document.getElementById("valores").innerHTML = r;
}

function eliminar(){
   let ex = "";
   let r = "";
   let ind = 0;
   let ex1 = 0;
   ex = document.getElementById("elim").value;

      if (arrayPn.includes(ex)){
         
         ind = arrayPn.indexOf(ex);
         ex1 = arrayPn.splice(ind, 1);
         r = extraervalor();
         document.getElementById("ultimoe").innerHTML = ex1;
         document.getElementById("valores").innerHTML = r;
         elim.value = '';
      }
      else{
         alert("Valor no encontrado");
      }
}
