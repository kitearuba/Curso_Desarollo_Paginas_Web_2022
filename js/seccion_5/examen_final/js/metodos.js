document.getElementById("boleto").addEventListener('click', com1, false);
document.getElementById("comprobar").addEventListener('click', com2, false);

var ori = [];
var ori1 = [];
var reintergro = [];
var nArray  = [];
var reintergro2 = [];
var compare = [];
var compareMin = [];
var compare1 = [];
var compare2 = [];
var numerosAcertados = [];


function com1(){

   /* let r = ""; */
   let reint = "";
   let reset = restaurar();

   reint = Math.floor(Math.random() * 9) + 1;
   reintergro.push(reint);

   var tempArray = new Array(49),i,r1;
   
   for (i=0;i<6;i++){
    r1 = Math.floor(Math.random() * 49) + 1;    
    if (tempArray[r1] === undefined){           
        ori1.push(nArray[r1]);             
        tempArray[r1] = true;             
        ori.push(r1);
        }
    else{                                  
        i--;                              
        }
    }
   
    let orgi = organizar();

   

   document.getElementById("id1").innerHTML = ori [0];
   document.getElementById("id2").innerHTML = ori [1];
   document.getElementById("id3").innerHTML = ori [2];
   document.getElementById("id4").innerHTML = ori [3];
   document.getElementById("id5").innerHTML = ori [4];
   document.getElementById("id6").innerHTML = ori [5];
   document.getElementById("id7").innerHTML = reintergro [0];
}

function restaurar(){
   ori = [];
   ori1 = [];
   reintergro = [];
}
function restaurar2(){
    reintergro2 = [];
    compare = [];
    compareMin = [];
    compare1 = [];
    compare2 = [];
    numerosAcertados = [];
}
function organizar(){
   for(let i = 0 ; i < 6 ; i++ ){

      for(let c = i + 1 ; c < 6 ; c++){
         var temp = 0;

         if(ori[i] > ori[c]){
            temp = ori[i];
            ori[i] = ori[c];
            ori[c] = temp;
         }
      }
   }
}

function com2(){
   let reset = restaurar2();

    let  v1 = Number(document.getElementById("i1").value);
    let  v2 = Number(document.getElementById("i2").value);
    let  v3 = Number(document.getElementById("i3").value);
    let  v4 = Number(document.getElementById("i4").value);
    let  v5 = Number(document.getElementById("i5").value);
    let  v6 = Number(document.getElementById("i6").value);
    let  v7 = Number(document.getElementById("i7").value);

   if(v1>0&& v2>0&& v3>0&& v4>0&& v5>0&&v6>0&& v7>0&&  v1<50&& v2<50&& v3<50&& v4<50&& v5<50&&v6<50&& v7< 10){
      
      reintergro2.push(v7);
      compare2.push(v1,v2,v3,v4,v5,v6);
      let comparis = duplicados(compare2)
      let premio = comparar2(ori);  
      let numerosAcert = organizar2();

      if(comparis == false){
        
         let cm1 = numerosAcertados.length;
         let compi2 = comparar1(reintergro , reintergro2);
         let cm2 = compare1.length; 
         
         if( cm1 > 2){

            document.getElementById("finalizar").innerHTML =  "Boleto premiado con " + cm1 + " aciertos";
            document.getElementById("finalizar").style.backgroundColor = "green";
         }
         else if(cm2 == 1){

            document.getElementById("finalizar").innerHTML =  "Devolución de apuesta";
            document.getElementById("finalizar").style.backgroundColor = "green";
         }
         else{
            document.getElementById("finalizar").innerHTML =  "Boleto no premiado";
            document.getElementById("finalizar").style.backgroundColor = "red";
         }
      }

      else if(comparis == true){
         document.getElementById("finalizar").innerHTML = "Numeros repetidos no son validos !" ;
         document.getElementById("finalizar").style.backgroundColor = "red";
      }
   }
   else{
      document.getElementById("finalizar").innerHTML =  "Numero ingresado no valido!";
      document.getElementById("finalizar").style.backgroundColor = "red";
   }
}
function comparar1(valor1 , valor2){

   for(let i = 0 ; i < 1 ; i++){

      if(valor1[i] == valor2[i]){
         compare1.push(valor1[i]);
      }
   }
}
function duplicados(array){
   if (array.length !== new Set(array).size) {
      return true;
   }
   else{
      return false;
   }
 }
 function comparar2(array){
   var incluye = 0;

   for(let i = 0 ; i < 6 ; i++ ){
      let ex = 0;
      ex = compare2.shift();
      
      if(incluye = array.includes(ex)){
         numerosAcertados.push(ex)
      }
   }
 }
 function organizar2(){
   for(let i = 0 ; i < numerosAcertados.length ; i++ ){

      for(let c = i + 1 ; c < numerosAcertados.length ; c++){
         var temp = 0;

         if(numerosAcertados[i] > numerosAcertados[c]){
            temp = numerosAcertados[i];
            numerosAcertados[i] = numerosAcertados[c];
            numerosAcertados[c] = temp;
         }
      }
   }
}