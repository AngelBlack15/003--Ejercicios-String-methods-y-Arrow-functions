// 19. Comprobar si una cadena comienza con una palabra
cadena19 = prompt("Ingresa una frase");
palabra19 = prompt("Ingresa una palabra");
const comienzaCon = (cadena19, palabra19) => cadena19.startsWith(palabra19);
console.log(comienzaCon(cadena19, palabra19));