class animal {
    constructor(especie,edad,color){
        this.esp = especie
        this.age = edad
        this.color = color
        this.info = `soy ${this.esp}, tengo ${this.age}, años y soy de color
        ${this.color}`
    }
    Verinfo(){
        document.write(this.info)
    }
}

const gato = new animal("gato",16,"verde")
const perro = new animal("perro",5,"negro")
const caballo = new animal("caballo",12,"marron")
// console.log(gato)
// cuando ejecutamos esto en consola, nos dice q tenemos un animal con las caracteristicas gato,16,verde
// ahi nos mostro la edad, 16
// soy gato, tengo 16, años y soy de color verde1
console.log(gato.info)
console.log(perro.info)
console.log(caballo.info)
// todo eso podemos ahorrarnoslo creando una funcion que sea Verinfo
gato.Verinfo()
perro.Verinfo()
caballo.Verinfo()
// ahi agregamos un metodo el cual nos muestra la info solo con llamarlo
