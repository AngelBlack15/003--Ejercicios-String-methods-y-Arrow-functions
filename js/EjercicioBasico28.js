// 28. Capitalizar todas las palabras de una frase
cadena28 = prompt("Ingresa una frase");
const capitalizarTodasPalabras = cadena28 => cadena28.split(' ').map(palabra28 => palabra28.charAt(0).toUpperCase() + palabra28.slice(1).toLowerCase()).join(' ');
console.log(capitalizarTodasPalabras(cadena28));