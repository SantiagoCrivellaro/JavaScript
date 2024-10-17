// Array original
const numbers = [1, 2, 3, 4, 5];
console.log('Array original:', numbers);

// Usando array.map() para crear un nuevo array
const doubledNumbers = numbers.map(x => x * 2);
console.log('Array después de map:', doubledNumbers);
// Nos devuelve [2,4,6,8,10]


// Lo que pasa es que, .map crea un nuevo array con otros datos, sin tocar el otr
// x es el valor de cada elemento por cada iteracion.
// osea, x primero vale 1, despues vale 2, despues vale 3, despues vale 4, despues vale 5.
// entonces, a x le damos una funcion :  => x * 2.
// cuando x valga uno, sera 1 * 2, listo.
// ahora x vale 2, sera 2 * 2
