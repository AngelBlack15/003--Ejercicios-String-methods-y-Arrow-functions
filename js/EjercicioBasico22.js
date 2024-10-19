// 22. Convertir una frase a camelCase
cadena = prompt("Ingresa una frase");
const convertirCamelCase = cadena => cadena.split(' ').map((palabra, index) => index === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join('');
console.log(convertirCamelCase(cadena));

// 22. Convertir una frase a camelCase
function convertirCamelCase(cadena) {
    return cadena.split(' ').map((palabra, index) => index === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join('');
}
cadena = prompt("Ingresa una frase");
console.log(convertirCamelCase(cadena));

