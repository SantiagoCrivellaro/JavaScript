const fun1 = (callback) => {
    document.write("inicio")
    callback()
    document.write("fin")
};

const fun2 = () => {
    document.write("proceso intermedio")
};

fun1(fun2)
// llamamos a funcion 1, bueno fun1 tiene un parametro (callback) ¿Cual sera el valor de callback? sera fun2.
// entonces, se ejecuta fun1 : "inicio" luego se ejecuta el callback que tiene como valor fun2
// entonces se ejecuta "proceso intermedio", termina de ejecutarse fun2, y el flujo vuelve a fun1.
// entonces quedaria asi :  inicio, proceso intermedio y fin.

// funcion flecha
const fun1 = (callback) => {}
//funcion normal
function fun1(callback) {}