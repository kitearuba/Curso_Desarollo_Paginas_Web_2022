document.getElementById("calcular").addEventListener('click', condicional, false);


function condicional(){

    let numero = "";
    let resultado = "";

    numero = Number(document.getElementById("numero").value);

    /* nonumero == isNaN(numero); */
    
   if (numero == 10){

      resultado = "Puntuacion Alumno: " + numero + "<br>" + "Calificacion: Matricula de Honor";      

   }
   else if( numero > 9 && numero < 10){

      resultado = "Puntuacion Alumno: " + numero + "<br>" + "Calificacion: Excelente";  
   }
   else if( numero > 7 && numero <= 9){

      resultado = "Puntuacion Alumno: " + numero + "<br>" + "Calificacion: Notable";  
   }
   else if( numero >= 5 && numero <= 7){

      resultado = "Puntuacion Alumno: " + numero + "<br>" + "Calificacion: Aprobado";  
   }
   else if( numero > 0 && numero < 5){

      resultado = "Puntuacion Alumno: " + numero + "<br>" + "Calificacion: Suspendido";  
   }
   else if( numero > 10 || numero < 0 || isNaN(numero) ){

     resultado =  "Valor fuera de Rango";  
   }
  


      document.getElementById("nota").innerHTML = resultado ;
}
    
    
  