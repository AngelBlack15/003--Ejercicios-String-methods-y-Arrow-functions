// 5. Reemplazar una palabra en una cadena
cadena = prompt("Ingresa una frase");
let original = prompt("Palabra a reemplazar");
let nuevo = prompt("Nueva palabra");
const reemplazarPalabra = (cadena, original, nuevo) => cadena.replace(original, nuevo);
console.log(reemplazarPalabra(cadena, original, nuevo));

// 5. Reemplazar una palabra en una cadena
function reemplazarPalabra(cadena, original, nuevo) {
    return cadena.replace(original, nuevo);
}
cadena = prompt("Ingresa una frase");
let original1 = prompt("Palabra a reemplazar");
let nuevo1 = prompt("Nueva palabra");
console.log(reemplazarPalabra(cadena, original1, nuevo1));

