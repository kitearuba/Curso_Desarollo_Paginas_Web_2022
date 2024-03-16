document.getElementById("iniciar").addEventListener('click', buclewhile, false);


function buclewhile(){

    let numero = "";
    let suma = 0;
    let promedio = 0;
    let contador = 0;
    let valores = "";

    numero = Number(window.prompt("Introducir Un Numero"));
    
     while (numero != 0) {

        suma = suma + numero; 
        contador++;  /* same as  contador = contador + 1 */
        valores += numero + " "

        numero = Number(window.prompt("Introducir Un Numero"));
     }

     promedio = suma / contador

       
        document.getElementById("suma").innerHTML = "La suma de los digitos es: " + suma;
        document.getElementById("promedio").innerHTML = "El Promedio de los digitos es: " + promedio;
        document.getElementById("numero").innerHTML = "Numeros: " + valores;
        document.getElementById("total").innerHTML = "La cantidad de digitos es " + contador;
       
        /* document.write(valor1);
        document.write('<br>');
        x=x+1; */
    }  
    