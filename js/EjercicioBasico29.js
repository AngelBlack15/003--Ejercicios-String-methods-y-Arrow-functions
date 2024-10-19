// 29. Comprimir una cadena eliminando letras consecutivas repetidas
cadena29 = prompt("Ingresa una palabra");
const comprimirCadena = cadena29 => cadena29.split('').filter((letra, index) => letra !== cadena29[index - 1]).join('');
console.log(comprimirCadena(cadena29));