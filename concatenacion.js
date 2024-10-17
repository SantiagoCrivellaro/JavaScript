// saludo = "Hola"
// pregunta = "como estas? "
// frase = saludo + pregunta
// document.write(frase)

// numero1 = 1
// numero2 = 2
// resultado = numero1 + numero2
// document.write(resultado)
// en este caso nos daria 3.

//haciendo esto podemos concatenarlos.

// numero1 = 1
// numero2 = 2
// resultado = "" + numero1 + numero2
// document.write(resultado)
// // esto nos da 12, agregando ""

// o sino tambien asi

numero1 = "1";
numero2 = 2;


// esto nos da error, pq? pq el concat funciona si hay un String
resultado = numero1.concat(numero2)
document.write(resultado)

nombre = "santiago crivellaro"
frase = `soy ${nombre} y estoy corriendo`;
document.write(frase)

// hariamos eso, en lugar de hacer esto.
//funciona? si. pero es mejor hacerlo con ${}
// frase = "hola" + nombre + "estoy corriendo."
// con backticks podemos escrirbir codigo HTML, Con comillas no.

// por ultimo, entender que no podemos usar las mismas comillas 
// 2 veces en un texto, por ejemplo
// frase = "hola, como estas? mi nombre es "santiago" y el tuyo"?
// por que? por que la comilla termina donde empieza "santiago"
// para eso, o empezamos con comillas simples o dobles, pero no repetimos, asi.

// frase = "hola, como estas? mi nombre es " aca iria comillas simples.""
// con los backticks es igual, podes empezar con comillas simples/dobles y tambien en el medio
// usar backticks, o viceversa.
// hola, esto esta escrito en el bloc de notas.