// 27. Convertir una cadena a snake_case
cadena27 = prompt("Ingresa una frase");
const convertirSnakeCase = cadena27 => cadena27.toLowerCase().replace(/ /g, '_');
console.log(convertirSnakeCase(cadena27));