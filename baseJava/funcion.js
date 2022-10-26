const prompt = require("prompt-sync")({ sigint: true });

function saludar(nombrePersona){
    console.log("HOLA COMO ESTAS" + nombrePersona+"?");
}

saludar();
