// 14. Obtener el carácter en una posición
cadena = prompt("Ingresa una palabra");
let posicion = prompt("Posición del carácter");
const obtenerCaracter = (cadena, posicion) => cadena.charAt(posicion);
console.log(obtenerCaracter(cadena, posicion));

// 14. Obtener el carácter en una posición
function obtenerCaracter(cadena, posicion) {
    return cadena.charAt(posicion);
}
cadena1 = prompt("Ingresa una palabra");
let posicion1 = prompt("Posición del carácter");
console.log(obtenerCaracter(cadena1, posicion1));

