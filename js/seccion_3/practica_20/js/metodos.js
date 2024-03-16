document.getElementById("solicitar").addEventListener('click', conversion, false);


function conversion(){

   let temp = "";
   let resultado = "";
   let respuesta = "";

   
   
   temp = Number(document.getElementById("numero").value);

   if (temp<= 130 && temp >= 0 ){

      resultado =  (temp -32)*(5/9);
      respuesta = "Grados Celsius: " + resultado;

      if(resultado >= 0 ){

         document.getElementById("resultado").style.backgroundColor = "green";

      }
      else if (resultado  <0){
         document.getElementById("resultado").style.backgroundColor = "red";
      }
   }
   else{
      respuesta = "Introduce una numero valido"
   }

   document.getElementById("resultado").innerHTML =  respuesta; 
}

    
    
  