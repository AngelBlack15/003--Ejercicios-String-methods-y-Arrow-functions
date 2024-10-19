// 18. Eliminar todas las vocales de una cadena
cadena18 = prompt("Ingresa una palabra");
const eliminarVocales = cadena18 => cadena18.replace(/[aeiou]/gi, '');
console.log(eliminarVocales(cadena18));