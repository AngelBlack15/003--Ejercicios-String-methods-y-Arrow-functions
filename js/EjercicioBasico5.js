// 5. Reemplazar una palabra en una cadena
cadena05 = prompt("Ingresa una frase");
let original05 = prompt("Palabra a reemplazar");
let nuevo05 = prompt("Nueva palabra");
const reemplazarPalabra = (cadena05, original05, nuevo05) => cadena05.replace(original05, nuevo05);
console.log(reemplazarPalabra(cadena05, original05, nuevo05));
