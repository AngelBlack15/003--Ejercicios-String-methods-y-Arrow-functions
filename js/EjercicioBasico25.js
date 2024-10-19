// 25. Remover caracteres especiales de una cadena
cadena25 = prompt("Ingresa una frase");
const removerCaracteresEspeciales = cadena25 => cadena25.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(removerCaracteresEspeciales(cadena25));