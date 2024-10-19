// 12. Comprobar si una palabra es un palíndromo
cadena = prompt("Ingresa una palabra");
const esPalindromo = cadena => cadena === cadena.split('').reverse().join('');
console.log(esPalindromo(cadena));

// 12. Comprobar si una palabra es un palíndromo
function esPalindromo(cadena) {
    return cadena === cadena.split('').reverse().join('');
}
cadena1 = prompt("Ingresa una palabra");
console.log(esPalindromo(cadena1));

