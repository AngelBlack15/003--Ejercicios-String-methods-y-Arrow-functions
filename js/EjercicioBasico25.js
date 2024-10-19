// 25. Remover caracteres especiales de una cadena
cadena = prompt("Ingresa una frase");
const removerCaracteresEspeciales = cadena => cadena.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(removerCaracteresEspeciales(cadena));

// 25. Remover caracteres especiales de una cadena
function removerCaracteresEspeciales(cadena) {
    return cadena.replace(/[^a-zA-Z0-9 ]/g, '');
}
cadena = prompt("Ingresa una frase");
console.log(removerCaracteresEspeciales(cadena));

