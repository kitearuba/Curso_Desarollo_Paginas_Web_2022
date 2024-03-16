document.getElementById("iniciar").addEventListener('click', tablademultiplicar, false);


function tablademultiplicar(){
    /* alert("ok") */

    /* declaracion de variables */
    let tabla = "";
    let repecitiones = "";
    /* var i = 0; */
    let resultado = ""; 


    /* capturar el valor de los input */
    tabla = Number(document.getElementById("tabla").value);
    repecitiones = Number(document.getElementById("repecitiones").value); 
    
    
if (tabla >= 0 && tabla <= 20 && repecitiones >= 0 && repecitiones <= 50) {
    
    resultado+= "<div>Tabla: " + tabla + " Repeticiones: " + repecitiones + "</div>"; 
 
    for ( let i = 0; i <= repecitiones; i++){

    resultado += "<li>" + tabla + "x" + i + "=" + tabla * 1 + "</li>";
            
    }

    document.getElementById("resultados").innerHTML = resultado ;
  
} 


}