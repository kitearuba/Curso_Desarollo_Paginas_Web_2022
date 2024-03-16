document.getElementById("validar").addEventListener('click', comprobar, false);

let contador = 0;
let intentos = 3;

function comprobar(){

   let passw1 = document.getElementById("pass1").value;
   let passw2 = document.getElementById("pass2").value;
  
   let veri = "";
   let result = "";

  
   if (passw1.length > 6 || passw2.length > 6 ) {
   
       veri = password (passw1, passw2);

         if (veri == true){
            document.getElementById("resultado").innerHTML = "ACESSO PERMITIDO";
            document.getElementById("resultado","password1", "password2").style.backgroundColor = "green";
            passw1.value = '';
            passw2.value = ''; 

         }
         else if(veri == false){

            contador++; 
            intentos--;

            if (contador == 3){
               alert("SISTEMA BLOQUEADO!!");
               document.getElementById("pass1").disabled = true;
               document.getElementById("pass2").disabled = true;
               passw1.value = '';
               passw2.value = '';
         
            }
            else{
               passw1.value = '';
               passw2.value = ''; 
            }

            document.getElementById("resultado").innerHTML = "ACESSO DENEGADO";
            document.getElementById("int").innerHTML = "<<< Te quedan " + intentos + " intentos >>>";
            document.getElementById("resultado").style.backgroundColor = "red";

         }

   }
   
   else {
    
    alert("Introduce un minimo de 6 caracteres")
        passw1.value = '';
        passw2.value = ''; 
     
   }
}

function password( valor1 , valor2){
   
   if (valor1 == valor2){

      return true;
   }
   else{
      return false;
   }
      
    
}

