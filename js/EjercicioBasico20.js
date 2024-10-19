// 20. Comprobar si una cadena termina con una palabra
cadena = prompt("Ingresa una frase");
palabra = prompt("Ingresa una palabra");
const terminaCon = (cadena, palabra) => cadena.endsWith(palabra);
console.log(terminaCon(cadena, palabra));

// 20. Comprobar si una cadena termina con una palabra
function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra);
}
cadena = prompt("Ingresa una frase");
palabra = prompt("Ingresa una palabra");
console.log(terminaCon(cadena, palabra));

