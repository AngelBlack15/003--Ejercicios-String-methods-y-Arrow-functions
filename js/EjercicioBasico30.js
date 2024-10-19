// 30. Contar la frecuencia de caracteres en una cadena
cadena30 = prompt("Ingresa una palabra");
const contarFrecuencia = cadena30 => [...cadena30].reduce((acc, letra) => (acc[letra] = (acc[letra] || 0) + 1, acc), {});
console.log(contarFrecuencia(cadena30));