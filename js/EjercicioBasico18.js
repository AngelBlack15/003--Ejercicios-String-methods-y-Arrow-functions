// 18. Eliminar todas las vocales de una cadena
cadena = prompt("Ingresa una palabra");
const eliminarVocales = cadena => cadena.replace(/[aeiou]/gi, '');
console.log(eliminarVocales(cadena));

// 18. Eliminar todas las vocales de una cadena
function eliminarVocales(cadena) {
    return cadena.replace(/[aeiou]/gi, '');
}
cadena1 = prompt("Ingresa una palabra");
console.log(eliminarVocales(cadena1));

