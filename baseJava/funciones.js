//Funcion expresada
let sumar = function(numA, numB){
return  numA + numB;
}

console.log(sumar(7,9));


//funcion declarada

function restar(numC, numD){
    return numC - numD;

}


console.log(restar(10,3));



//EJEMPLO SCOPE

let mensaje = 'Hola'; /*scope global, exite en general*/

function saludar(){  /*scope local, la variable exite dentro de la funcion, no fuera*/
    return mensaje; //tiene predominancia sobre un scope global
}

console.log(mensaje);
console.log(saludar());