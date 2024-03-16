document.getElementById("solicitar").addEventListener('click', dia, false);


function dia(){

   let dia = "";
   let resultado = "";
   
   dia = document.getElementById("valor").value;
   
   let result = dia.toLowerCase(); 

   switch (result){
       

      case "lunes": resultado = "El Lunes es el primer día de la semana y es laborable. ";
      break;
      case "martes":  resultado = "El Martes es el segundo día de la semana y es laborable. ";
      break;
      case "miercoles":  resultado = "El Miércoles es el tercer día de la semana y es laborable. ";
      break;
      case "jueves": resultado = "El Jueves es el cuarto día de la semana y es laborable. ";
      break;
      case "viernes":  resultado = "El Viernes es el quinto día de la semana y es laborable. ";
      break;
      case "sabado":  resultado =  "El Sabado es el sexto día de la semana y no es laborable. ";
      break;
      case "domingo":  resultado =  "El Domingo es el septimo día de la semana y no es laborable. ";
      break;
      default: resultado = "El texto introducido no es un día de la semana";
   }    
   document.getElementById("intro").innerHTML = "Texto Introducido: " + dia; 
   document.getElementById("resultado").innerHTML =  resultado; 
}

    
    
  