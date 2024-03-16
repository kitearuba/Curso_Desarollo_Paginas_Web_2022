document.getElementById("consultar").addEventListener('click', consult, false);

var marcas = ["audi", "bmw" , "nissan", "opel", "jaguar", "seat", "fiat", "tesla" ]

function consult(){
   let valor = window.prompt("Introduce la marca del vehiculo: ");
   let valortxt = String(valor);
   let valor2 = valortxt.toLowerCase();
   let valor3 = marcas.indexOf(valor2)
   let resto = marcas.length; 
   let result = "";

      if (valor3 != -1){

         marcas.splice(valor3,1,);

         result = "Vehiculo " + valor + " localizado";
      }
      else if( resto == 0){
         result = "No hay más elementos en el array";
      }
      else if(valor3 == -1){

         result = "Vehículo " + valor + " NO localizado";
      }
      

   document.getElementById("resultado").innerHTML = result;

}