document.getElementById("iniciar").addEventListener('click', parimpar, false);


function parimpar(){

    /* alert("OK") */
    let numero="";
    let resultado="";
    let message ="";
    let color= "";

/* Captura valor del input y lo convierte a numero */
    numero = Number( document.getElementById("numero").value);

    if(numero > 0 && numero<= 100){

    resultado = numero%2
    }
    
        if(resultado !=0){
            message = "Numero impar"
            color ="green";
        }
        else if(resultado !=1){
            message = "Numero par"
            color ="red";
        }
        else{
            document.getElementById("resultado").innerHTML = "Error";
           color ="yellow";
        }
            
    }
    document.getElementById("resultado").innerHTML = message;
    color;
    document.getElementById("numero").value="";
    document.getElementById("numero").focus="";
    document.getElementById("resultado").style.backgroundColor = color;
}

