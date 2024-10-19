// 26. Devolver la palabra más larga en una cadena
cadena26 = prompt("Ingresa una frase");
const palabraMasLarga = cadena26 => cadena26.split(' ').reduce((a, b) => b.length > a.length ? b : a);
console.log(palabraMasLarga(cadena26));