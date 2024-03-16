document.getElementById("e_plato").addEventListener('click', com1, false);
document.getElementById("enviar").addEventListener('click', com2, false);
document.getElementById("finalizar").addEventListener('click', com3, false);

var coci = [];
var come = [];
var servicios = [];
   

function com1(){
   let valora = "";
   let r = "";
   
   valora = document.getElementById("plato").value;
   coci.push(valora);
   servicios.push(valora);
   r = ingresarvalor();
  
   document.getElementById("cocina").innerHTML = r;
   plato.value = '';
}

function com2(){
   let ex = "";
   let r = "";
   let r1 = "";
   

   ex = coci.shift();
   r = ingresarvalor();
   come.push(ex);
   r1 = ingresarcomi();

   if ( coci.length < 1  &&  come.length < 1){
      let serv = 0;

      serv = numeroServicios();

      document.getElementById("estado").innerHTML =  "Servicio Finalizado. Total " + serv + " Comandas" ;
      document.getElementById("estado").style.backgroundColor = "red";
      document.getElementById("cocina").innerHTML = r;
      document.getElementById("comedor").innerHTML = r1;
   }
   else if ( coci.length > 0  ||  come.length > 0){

      document.getElementById("estado").innerHTML =  "Servicio Activo" ;
      document.getElementById("estado").style.backgroundColor = "rgb(0, 255, 8)";
      document.getElementById("cocina").innerHTML = r;
      document.getElementById("comedor").innerHTML = r1;
   }

}

function com3(){
   let ex = "";
   let r = "";
   let r1 = "";

   ex = come.shift();
   r = ingresarvalor();
   r1 = ingresarcomi();

   if ( coci.length < 1  &&  come.length < 1){
      let serv = 0;

      serv = numeroServicios();

      document.getElementById("estado").innerHTML =  "Servicio Finalizado. Total " + serv + " Comandas" ;
      document.getElementById("estado").style.backgroundColor = "red";
      document.getElementById("cocina").innerHTML = r;
      document.getElementById("comedor").innerHTML = r1;
   }
   else if ( coci.length > 0  ||  come.length > 0){

      document.getElementById("estado").innerHTML =  "Servicio Activo" ;
      document.getElementById("estado").style.backgroundColor = "rgb(0, 255, 8)";
      document.getElementById("cocina").innerHTML = r;
      document.getElementById("comedor").innerHTML = r1;
   }
}


function ingresarvalor(){

   let resultado = "";
   

   for(let i=0;i<coci.length;i++){
      let sum = 1;
      sum = sum + i;
      resultado += sum + "." + " " + coci[i] + "<br>";
   }
   return resultado;
}
function ingresarcomi(){

   let resultado="";

   for(let i=0;i<come.length;i++){
      let sum = 1;
      sum = sum + i;
      resultado += sum + "." + " " + come[i] + "<br>";
   }
   
   return resultado;
}
function numeroServicios(){
   let resultado="";

   resultado = servicios.length ;
   return resultado;
}

