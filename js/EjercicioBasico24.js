// 24. Comprobar si una cadena contiene solo números
cadena = prompt("Ingresa una cadena");
const contieneSoloNumeros = cadena => /^\d+$/.test(cadena);
console.log(contieneSoloNumeros(cadena));

// 24. Comprobar si una cadena contiene solo números
function contieneSoloNumeros(cadena) {
    return /^\d+$/.test(cadena);
}
cadena = prompt("Ingresa una cadena");
console.log(contieneSoloNumeros(cadena));

