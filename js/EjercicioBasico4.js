// 4. Comprobar si una cadena contiene una palabra
cadena04 = prompt("Ingresa una frase");
let palabra04 = prompt("Ingresa una palabra a buscar");
const contienePalabra = (cadena04, palabra04) => cadena04.includes(palabra04);
console.log(contienePalabra(cadena04, palabra04));
