// 21. Reemplazar todas las ocurrencias de una palabra
cadena21 = prompt("Ingresa una frase");
original21 = prompt("Palabra a reemplazar");
nuevo21 = prompt("Nueva palabra");
const reemplazarTodas = (cadena21, original21, nuevo21) => cadena21.replaceAll(original21, nuevo21);
console.log(reemplazarTodas(cadena21, original21, nuevo21));