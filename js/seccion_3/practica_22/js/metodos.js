document.getElementById("login").addEventListener('click', comprobar, false);

let contador = 0;
let intentos = 3;

function comprobar(){

   let pass1 = document.getElementById("password1").value;
   let pass2 = document.getElementById("password2").value;
  
   let veri = "";
   let result = "";

  
   if (pass1.length < 6 || pass2.length < 6 ) {
   
      alert("Introduce un minimo de 6 caracteres")
      password1.value = '';
      password2.value = ''; 

   }
   
   else {

      veri = password (pass1, pass2);

         if (veri == true){
            document.getElementById("resultado").innerHTML = "ACESSO PERMITIDO";
            document.getElementById("resultado","password1", "password2").style.backgroundColor = "green";
            password1.value = '';
            password2.value = ''; 

         }
         else if(veri == false){

            contador++; 
            intentos--;

            if (contador == 3){
               alert("SISTEMA BLOQUEADO!!");
               document.getElementById("password1").disabled = true;
               document.getElementById("password2").disabled = true;
               password1.value = '';
               password2.value = '';
         
            }
            else{
               password1.value = '';
               password2.value = ''; 
            }

            document.getElementById("resultado").innerHTML = "ACESSO DENEGADO";
            document.getElementById("int").innerHTML = "<<< Te quedan " + intentos + " intentos >>>";
            document.getElementById("resultado").style.backgroundColor = "red";

         }
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

