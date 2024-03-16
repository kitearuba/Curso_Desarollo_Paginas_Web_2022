document.getElementById("mostrar").addEventListener('click', strings, false);




function strings(){

   var nombre = document.getElementById("name").value;
   var apellido = document.getElementById("lastname").value;
   var concat = nombre.concat(" " + apellido);
   var count = concat.length;
   var upcase = concat.toUpperCase();
   var lowcase = concat.toLocaleLowerCase();
   var space = concat.search(" ");
   var lastLetter = lowcase.endsWith("a");
   var firstLetter = lowcase.startsWith("h");
   var search = concat.search(apellido);
   var extract = concat.slice(search)



   document.getElementById("resultado").innerHTML = "Nombre: " + nombre + "<br> Apellido: " + apellido + "<br> Nombre y apellido: " + concat + "<br> Tamaño texto: " + count + "<br> Mayusculas: " + upcase + "<br> Minusculas: " + lowcase + "<br> Posicion del espacio: " + space+ "<br> finaliza conletra 'a' : " + lastLetter + "<br> Comienza por la letra 'H': " + firstLetter + "<br> Extraer solo el apellido:" + extract;
} 