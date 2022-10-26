
/*****VARIABLES **/

var nombre = 'Juan'; /*las variables son como cajs vacias*/

console.log(nombre);




let/*variable*/ numero_preferido/*nombre variable*/ = 3;
/*una variable con let, no puede ser re-definida en un mismo bloque*/
console.log(numero_preferido);
/*REGLAS LET 1.Letra,numero, signo peso o guion bajo*/
/*no puede empezar por numero no debe contener ñ o caracteres con acento*/


if (true) {/*if, permite declara nuevamente una variable, pero dentro del bloque if*/
    let numero_preferido = 5;
    console.log(numero_preferido);
}



const apellido = 'Naranjo' /*las variables constantes, solo se pueden declarar una vez, no se puede redefinir en ningun momento*/
console.log(apellido);