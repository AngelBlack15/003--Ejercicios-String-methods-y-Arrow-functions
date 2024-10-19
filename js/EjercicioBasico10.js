// 10. Contar ocurrencias de una letra en una cadena
cadena = prompt("Ingresa una palabra");
let letra = prompt("Ingresa una letra");
const contarOcurrencias = (cadena, letra) => [...cadena].filter(char => char === letra).length;
console.log(contarOcurrencias(cadena, letra));

// 10. Contar ocurrencias de una letra en una cadena
function contarOcurrencias(cadena, letra) {
    return [...cadena].filter(char => char === letra).length;
}
cadena1 = prompt("Ingresa una palabra");
let letra1 = prompt("Ingresa una letra");
console.log(contarOcurrencias(cadena1, letra1));

