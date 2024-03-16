document.getElementById("solicitar").addEventListener('click', prestamo, false);


function prestamo(){

   let nombre = "";
   let edad = "";
   let salario = "";
   let resultado = "";
   
   nombre = document.getElementById("nombre").value;
   edad = Number(document.getElementById("edad").value);
   salario = Number(document.getElementById("salario").value);

   if (edad >= 65 && salario >= 1500 ){

      resultado = "OK Préstamo concedido"
   }
   else if (edad >= 65 && salario < 1500 ){

      resultado = "OK Préstamo si avala el 30%"
   }
   else if (edad < 65 && salario >= 1500 ){

      resultado = "'OK Préstamo si avala el 50%"
   }
   else if (edad < 65 && salario < 1500 ){

      resultado = "'Préstamo NO concedido"
   }

   document.getElementById("resultado").innerHTML =  "El señor/a " + nombre + "a solicitado un credito bancario con el resultado:" + "<br>" + resultado; 
}

    
    
  