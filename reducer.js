const reducido = [1, 2].reduce((acc, el)  => acc + el, 0)
console.log(reducido)
/* el resultado da 3, por que el primer parametro es el Acumulador (no importa el nombre que pongas), el primero es el acumulador
el segundo es el elemento, de nuevo no importa el nombre.
entonces, empieza el acumulador en 0, entonces la funcion flecha nos dice que acumulador + elemento
acumulador = 0, elemento = 1, = 1, ahora el acumulador es 1, itera de nuevo, elemento ahora vale 2
 acumulador = 1, elemento = 2, = 3 */

 // por eso reducer, redujo el 1 y 2 a 3.