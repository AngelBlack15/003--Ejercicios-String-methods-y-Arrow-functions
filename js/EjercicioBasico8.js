// 8. Extraer una parte de una cadena
cadena08 = prompt("Ingresa una palabra");
let inicio08 = prompt("Posición inicial");
let fin08 = prompt("Posición final");
const extraerParte = (cadena08, inicio08, fin08) => cadena08.substring(inicio08, fin08);
console.log(extraerParte(cadena08, inicio08, fin08));
