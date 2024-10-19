// 8. Extraer una parte de una cadena
cadena = prompt("Ingresa una palabra");
let inicio = prompt("Posición inicial");
let fin = prompt("Posición final");
const extraerParte = (cadena, inicio, fin) => cadena.substring(inicio, fin);
console.log(extraerParte(cadena, inicio, fin));

// 8. Extraer una parte de una cadena
function extraerParte(cadena, inicio, fin) {
    return cadena.substring(inicio, fin);
}
cadena = prompt("Ingresa una palabra");
let inicio1 = prompt("Posición inicial");
let fin1 = prompt("Posición final");
console.log(extraerParte(cadena, inicio1, fin1));

