// 26. Devolver la palabra más larga en una cadena
cadena = prompt("Ingresa una frase");
const palabraMasLarga = cadena => cadena.split(' ').reduce((a, b) => b.length > a.length ? b : a);
console.log(palabraMasLarga(cadena));

// 26. Devolver la palabra más larga en una cadena
function palabraMasLarga(cadena) {
    return cadena.split(' ').reduce((a, b) => b.length > a.length ? b : a);
}
cadena = prompt("Ingresa una frase");
console.log(palabraMasLarga(cadena));

