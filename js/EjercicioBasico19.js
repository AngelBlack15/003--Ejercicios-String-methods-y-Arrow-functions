// 19. Comprobar si una cadena comienza con una palabra
cadena = prompt("Ingresa una frase");
palabra = prompt("Ingresa una palabra");
const comienzaCon = (cadena, palabra) => cadena.startsWith(palabra);
console.log(comienzaCon(cadena, palabra));

// 19. Comprobar si una cadena comienza con una palabra
function comienzaCon(cadena, palabra) {
    return cadena.startsWith(palabra);
}
cadena = prompt("Ingresa una frase");
palabra = prompt("Ingresa una palabra");
console.log(comienzaCon(cadena, palabra));

