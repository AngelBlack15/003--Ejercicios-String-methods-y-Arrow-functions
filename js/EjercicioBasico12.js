// 12. Comprobar si una palabra es un palíndromo
cadena12 = prompt("Ingresa una palabra");
const esPalindromo = cadena12 => cadena12 === cadena12.split('').reverse().join('');
console.log(esPalindromo(cadena12));
