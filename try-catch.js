try {
    aaaaaaaaaaaaaa
}

// catch Incondicional
// catch(error){
//     alert("Lo siento, ocurrio un error.")
// }

// aca lo que sucede es : en try {} decimos
// intenta ejecutar esto, si tira error, con catch(error) lo atrapas y haces lo que vos quieras
// en este ejemplo poner una alerta, es decir controlamos un error para que el programa siga funcionando.

// tambien hay catch condicional, es decir con condiciones adentro

catch(error){
    if (3 > 5) {
        alert("aaaaa")
    } else {
        alert("wwwwwww")
    }
}


// Finally : se muestra pase lo que pase, tenga error o no

// Throw lanza una excepcion

throw "jajaxd"
// eso lanza una expecion que se llama "jajaxd"
// throw significa tirar, tambien puede tirar objetos,etc,etc