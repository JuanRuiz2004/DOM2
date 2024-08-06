//Ejercicio 1.1

function Clase(elemento, clase) {
    return elemento.classList.contains(clase);
}
var elemento = document.getElementById('hola');

console.log(Clase(elemento, 'clase1')); // 
console.log(Clase(elemento, 'clase3')); // 

//Ejercicio 1.2

function Numeroclases(elemento) {
    return elemento.classList.length;
}

var elemento = document.getElementById('hola1.2');
console.log(Numeroclases(elemento));

//Ejercicio 1.3

 function imprimirClases(elemento) {
  
    var listaDeClases = elemento.classList;

    for (var i = 0; i < listaDeClases.length; i++) {
        console.log(listaDeClases.item(i));
    }
}
var elemento = document.getElementById('hola1.2');


imprimirClases(elemento);

//Ejercicio 1.4

function tieneClase(elemento, clase) {
    return elemento.classList.contains(clase);
}


var elemento = document.getElementById('hola');


console.log(tieneClase(elemento, 'clase1')); // este hace parte(verdadero)
console.log(tieneClase(elemento, 'clase3'));// este no (falso) 

//Ejercicio 1.5

function añadirClase(elemento, ...clases) {
    elemento.classList.add(...clases);
}
var elemento = document.getElementById('hola1.5');


añadirClase(elemento, 'clase2', 'clase3');


console.log(elemento.className);

//Ejercicio 1.6 
function eliminarClases(elemento, ...clases) {
    elemento.classList.remove(...clases);
}
var elemento = document.getElementById('hola1.5');

eliminarClases(elemento, 'clase2', 'clase3');
console.log(elemento.className); 



//Nota para el profe( El ejercicio 1.7 no lo entendi muy bien entonces no lo pude hacer profe, tampoco lo entendi con videos ni nada)


//Ejercicio 1.8

// Función para añadir o eliminar una clase basada en un booleano
function toggleClase(elemento, clase, estado) {
    elemento.classList.toggle(clase, estado);
}

var elemento = document.getElementById('hola1.2');

toggleClase(elemento, 'clase2', true);
console.log(elemento.className); 

toggleClase(elemento, 'clase2', false);
console.log(elemento.className); 

//Ejercicio 1.9

function reemplazarClase(elemento, claseVieja, claseNueva) {
    elemento.classList.replace(Anterior,Nueva);
}

var elemento = document.getElementById('Hola1.9');


reemplazarClase(elemento, 'clase1', 'clase3');
console.log(elemento.className); 



//Nota para el profesor n2: Profesor, no alcance a ver los videos de esta seccion, y no me alcanzo el tiempo para hacer los ejercicios de la segunda parte, perdón :(