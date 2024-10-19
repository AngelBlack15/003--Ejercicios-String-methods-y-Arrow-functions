// 10. Contar ocurrencias de una letra en una cadena
cadena10 = prompt("Ingresa una palabra");
let letra10 = prompt("Ingresa una letra");
const contarOcurrencias = (cadena10, letra10) => [...cadena10].filter(char => char === letra10).length;
console.log(contarOcurrencias(cadena10, letra10));
