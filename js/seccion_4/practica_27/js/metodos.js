document.getElementById("consultar").addEventListener('click', consult, false);

var nums = [7, 8, 2, 8, 15, 13, 50, 16, 2, 11, 19, 24, 36, 14, 21, 43, 17, 22, 41];

function consult(){

   var suma = 0;
   var average = 0;
   var len = nums.length;
   var temp = 0;
   var min = 0;
   var max = 0;


   for (i = 0; i < len; i += 1){

      suma += nums[i];
      average = suma / len;
   }
   for(let i = 0 ; i < len ; i++ ){

         for(let c = i + 1 ; c < len ; c++){

            if(nums[i] > nums[c]){
               temp = nums[i];
               nums[i] = nums[c];
               nums[c] = temp;
            }
         }
         max = nums[18];
         min = nums[0];
   }

   document.getElementById("resultado").innerHTML = "Valor Max: " + max + "<br> Valor Min: " + min + "<br> Promedio: " + average.toFixed(2);

}

      