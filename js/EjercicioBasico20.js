// 20. Comprobar si una cadena termina con una palabra
cadena20 = prompt("Ingresa una frase");
palabra20 = prompt("Ingresa una palabra");
const terminaCon = (cadena20, palabra20) => cadena20.endsWith(palabra20);
console.log(terminaCon(cadena20, palabra20));