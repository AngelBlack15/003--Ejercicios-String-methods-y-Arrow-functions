// 23. Truncar una cadena a un número de caracteres
cadena = prompt("Ingresa una frase");
let longitud = prompt("Longitud máxima");
const truncarCadena = (cadena, longitud) => cadena.length > longitud ? cadena.slice(0, longitud) + '...' : cadena;
console.log(truncarCadena(cadena, longitud));


// 23. Truncar una cadena a un número de caracteres
function truncarCadena(cadena, longitud) {
    return cadena.length > longitud ? cadena.slice(0, longitud) + '...' : cadena;
}
cadena01 = prompt("Ingresa una frase");
let longitud01 = prompt("Longitud máxima");
console.log(truncarCadena(cadena01, longitud01));

