document.getElementById("iniciar").addEventListener('click', dieciciete, false);


function dieciciete(){

    let numero = "";
    let bajada = "";
    let subida = 0;
    let valor1 = 0;
    let valor2 = 0;
    let valor3 = 0;

    numero = Number(document.getElementById("valor").value);

   if (numero < 0){

   document.getElementById("num").innerHTML = "El numero introducido no es valido";
   }
   
   else{   
      valor1 = numero;
      valor3 = 2;
      while ( valor1 >= 0) {
         
         bajada += valor1-- + ",";
      }
      
      while ( valor2 <= numero) {

         subida +=  valor2 + ",";
         valor2 += 2;
         /* valor2 = valor3 + valor2; */
         
      } 


      document.getElementById("num").innerHTML = "Numero Introducido: " + numero;
   
      document.getElementById("baja").innerHTML = "Bajada: " + bajada + " ";
      
      document.getElementById("subi").innerHTML = "Subida: " + subida + " ";
   } 
  
  
}
    
  /*   
  while(numero >= 0) {

   resultado += numero


   resultado="";
   numero=0;

   while(numero<= valor_max){

      resultado+= numero + "-";
      numero+=;

   }




  } */