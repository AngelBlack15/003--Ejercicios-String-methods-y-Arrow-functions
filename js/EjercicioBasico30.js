// 30. Contar la frecuencia de caracteres en una cadena
cadena = prompt("Ingresa una palabra");
const contarFrecuencia = cadena => [...cadena].reduce((acc, letra) => (acc[letra] = (acc[letra] || 0) + 1, acc), {});
console.log(contarFrecuencia(cadena));

// 30. Contar la frecuencia de caracteres en una cadena
function contarFrecuencia(cadena) {
    return [...cadena].reduce((acc, letra) => {
        acc[letra] = (acc[letra] || 0) + 1;
        return acc;
    }, {});
}
cadena = prompt("Ingresa una palabra");
console.log(contarFrecuencia(cadena));