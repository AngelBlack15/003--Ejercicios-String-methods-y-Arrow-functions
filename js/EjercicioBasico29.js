// 29. Comprimir una cadena eliminando letras consecutivas repetidas
cadena = prompt("Ingresa una palabra");
const comprimirCadena = cadena => cadena.split('').filter((letra, index) => letra !== cadena[index - 1]).join('');
console.log(comprimirCadena(cadena));

// 29. Comprimir una cadena eliminando letras consecutivas repetidas
function comprimirCadena(cadena) {
    return cadena.split('').filter((letra, index) => letra !== cadena[index - 1]).join('');
}
cadena = prompt("Ingresa una palabra");
console.log(comprimirCadena(cadena));

