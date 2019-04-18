const fs = require ('fs');
'use strict';
console.log("Pense em um personagem ou pessoa");
var input_primario = process.stdin;
input_primario.setEncoding('utf-8');

input_primario.on ('data', function(data){
    if(data === 'exit\n'){
        process.exit();
    }
});

var questions = [
    {
    pergunta1: "Seu personagem é homem?\n(a) Sim\n\
                (b) Não\n(c) Não sei",
    resposta1: data
    },
    {
    pergunta2: "Seu personagem tem mais de 20 anos?\n(a) Sim\n\
                (b) Não\n(c) Não sei",
    resposta2: data 
    }
]
