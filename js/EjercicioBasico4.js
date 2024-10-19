// 4. Comprobar si una cadena contiene una palabra
cadena = prompt("Ingresa una frase");
let palabra = prompt("Ingresa una palabra a buscar");
const contienePalabra = (cadena, palabra) => cadena.includes(palabra);
console.log(contienePalabra(cadena, palabra));

// 4. Comprobar si una cadena contiene una palabra
function contienePalabra(cadena, palabra) {
    return cadena.includes(palabra);
}
cadena = prompt("Ingresa una frase");
let palabra1 = prompt("Ingresa una palabra a buscar");
console.log(contienePalabra(cadena, palabra1));

