// 23. Truncar una cadena a un número de caracteres
cadena23 = prompt("Ingresa una frase");
let longitud23 = prompt("Longitud máxima");
const truncarCadena = (cadena23, longitud23) => cadena23.length > longitud23 ? cadena23.slice(0, longitud23) + '...' : cadena23;
console.log(truncarCadena(cadena23, longitud23));