// 22. Convertir una frase a camelCase
cadena22 = prompt("Ingresa una frase");
const convertirCamelCase = cadena22 => cadena22.split(' ').map((palabra22, index) => index === 0 ? palabra22.toLowerCase() : palabra22.charAt(0).toUpperCase() + palabra22.slice(1).toLowerCase()).join('');
console.log(convertirCamelCase(cadena22));
