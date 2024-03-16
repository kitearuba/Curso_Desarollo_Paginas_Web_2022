document.getElementById("anadir").addEventListener('click', agregar, false);
document.getElementById("resolver").addEventListener('click', resolve, false);

   var numspar = [];
   var numsimpar = [];
   

function agregar(){
   var valor = 0;
   valor = Number(document.getElementById("valores").value);

   if(isNaN(valor)){
      alert("Añadir un valor valido");
      valores.value = '';
   
   }

   else if(valor != isNaN){
      let temp = valor;
      let prueba = 0;

      prueba = determine(temp)

      if (prueba == 0){
         numspar.push(valor);
         valores.value = '';
      }
      else if(prueba == 1){
         numsimpar.push(valor);
         valores.value = '';
      }
   }
}

function determine(valor1){
   return (valor1 % 2) == 1;
}

function resolve(){

   var resultadopar = 0;
   var resultadoimpar = 0;

   for(let i=0;i<numspar.length;i++){

      resultadopar+=numspar[i]+" - ";

   }
   for(let i=0;i<numsimpar.length;i++){

      resultadoimpar+=numsimpar[i]+" - ";
   }


document.getElementById("impar").innerHTML = "NUMEROS IMPARES: " + resultadoimpar ;
document.getElementById("par").innerHTML = "NUMEROS PARES: " + resultadopar ;
}