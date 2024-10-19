// 9. Convertir la primera letra a mayúscula
cadena09 = prompt("Ingresa una palabra");
const capitalizarPrimeraLetra = cadena09 => cadena09.charAt(0).toUpperCase() + cadena09.slice(1);
console.log(capitalizarPrimeraLetra(cadena09));
