'use strict';

/* Preguntar nombre de usuario y saludarlo por su nombre*/

let nombre = prompt('Cual es tu nombre');

if (nombre) {
    document.write('Hola'+ ' '+nombre);
} else {
    document.write("Hola Desconocido.");
}
