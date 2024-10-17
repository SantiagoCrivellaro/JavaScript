// async hace que una promesa sea Asincrona
// await hace que se espere a algo a que se resuelva
// await no funciona sin async

const fetchpoke = async () => {
    const pokeapi = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(pokeapi)
}

fetchpoke()
// esta promesa va a dar pendiente, por que estamos dando un console.log de algo
// que no se resolvio todavia, esta pendiente
// entonces para eso agregamos await.

const fetchpoke = async () => {
    const pokeapi = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(pokeapi)
}
// Await quiere decir que se espere, es decir espera que la promesa se resuelva, para mostrar los datos
// ahora en lugar de mostrar estado pendiente, mostrara el resultado, ya sea fullfinied o rejected

// a partir de que le ponemos await, la funcion (Asincrona) va a esperar que se complete el pedido