const prompt = require("prompt-sync")({ sigint: true }); /*simula lo que atrapa los datos*/
/*npm i prompt-sync -----COMANDO PARA LA TERMINAL------*/ 
let nombre =/*funcion*/ prompt("Ingrese su nombre: ");
console.log (`Hola mi nombre es hernesto perez ${nombre}!!!`);/*string y variable nombre, se guarda lo que ingresemos mediante la terminal*/
