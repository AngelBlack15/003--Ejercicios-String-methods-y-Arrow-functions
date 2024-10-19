// 21. Reemplazar todas las ocurrencias de una palabra
cadena = prompt("Ingresa una frase");
original = prompt("Palabra a reemplazar");
nuevo = prompt("Nueva palabra");
const reemplazarTodas = (cadena, original, nuevo) => cadena.replaceAll(original, nuevo);
console.log(reemplazarTodas(cadena, original, nuevo));

// 21. Reemplazar todas las ocurrencias de una palabra
function reemplazarTodas(cadena, original, nuevo) {
    return cadena.replaceAll(original, nuevo);
}
cadena = prompt("Ingresa una frase");
original = prompt("Palabra a reemplazar");
nuevo = prompt("Nueva palabra");
console.log(reemplazarTodas(cadena, original, nuevo));

