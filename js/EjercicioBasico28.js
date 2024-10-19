// 28. Capitalizar todas las palabras de una frase
cadena = prompt("Ingresa una frase");
const capitalizarTodasPalabras = cadena => cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
console.log(capitalizarTodasPalabras(cadena));

// 28. Capitalizar todas las palabras de una frase
function capitalizarTodasPalabras(cadena) {
    return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
}
cadena = prompt("Ingresa una frase");
console.log(capitalizarTodasPalabras(cadena));

