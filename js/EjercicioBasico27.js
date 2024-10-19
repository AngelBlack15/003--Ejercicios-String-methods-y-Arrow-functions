// 27. Convertir una cadena a snake_case
cadena = prompt("Ingresa una frase");
const convertirSnakeCase = cadena => cadena.toLowerCase().replace(/ /g, '_');
console.log(convertirSnakeCase(cadena));

// 27. Convertir una cadena a snake_case
function convertirSnakeCase(cadena) {
    return cadena.toLowerCase().replace(/ /g, '_');
}
cadena = prompt("Ingresa una frase");
console.log(convertirSnakeCase(cadena));

