// 24. Comprobar si una cadena contiene solo números
cadena24 = prompt("Ingresa una cadena");
const contieneSoloNumeros = cadena24 => /^\d+$/.test(cadena24);
console.log(contieneSoloNumeros(cadena24));