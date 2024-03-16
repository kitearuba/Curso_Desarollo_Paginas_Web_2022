document.getElementById("box_color").addEventListener('click', color, false);

document.getElementById("box_color").addEventListener('mouseover', up, false);

document.getElementById("box_color").addEventListener('mouseout', down, false);

function up(){
    document.getElementById("box_color").style.backgroundColor = "red";
}

function down(){
    document.getElementById("box_color").style.backgroundColor = "blue";
}

function color(){

    let colorfondo ="";

    colorfondo = window.prompt ("Introduce el color en Ingles")


document.getElementById("box_color").style.backgroundColor = colorfondo;

}
/* Llamar oinvocar a la funcion */
/* color(); */