let promesa = new Promise((resolve, reject) {
    resolve("Exito en el procesamiento");
    reject("Error en el procesamiento");
});

promesa.then((resultado) {
    console.log(resultado);
}).catch((error) {
    console.log(error)
});


// Estado de la Promesa:

// el objeto promise (promesa) es usado para procesamientos asincronos.
// una promesa representa un valor que puede estar disponible ahora, es un futuro, o nunca.

// podemos elegir si aceptarla o rechazar la solicitud y resolver o no


// Pendiente (Pending): Estado inicial, antes de que la promesa sea cumplida o rechazada.
// Cumplida (Fulfilled): La operación asincrónica se completó exitosamente. La promesa está "resuelta" con un valor.
// Rechazada (Rejected): La operación asincrónica falló. La promesa está "rechazada" con una razón o error.


let nombre = "pedro"

const promesa = new  Promise((resolve, reject)) {
    if (nombre !== "pedro") reject("no eres pedro")
        else (nombre = "pedro") resolve("pedro")
}
// asi queda encapsulado, para verlo usamos then
promesa.then((resultado)=> {
    console.log(resultado)
}
// ahi lo mostramos