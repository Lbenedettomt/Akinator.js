const fs = require ('fs');

var questions = [
    
    {
        pergunta1: "Seu personagem é homem?\n(a) Sim\n\
        (b) Não\n(c) Não sei",
        resposta1: ""
    },
    {
        pergunta2: "Seu personagem tem mais de 20 anos?\n(a) Sim\n\
        (b) Não\n(c) Não sei",
        resposta2: data 
    },
    {
        pergunta3: "Seu personagem é um desenho animado?\n(a) Sim\n\
        (b) Não\n(c) Não sei",
        resposta3: data
    }
]

//var firstItem = "Pense em um personagem ou pessoa"

for(var i = 0; i < questions.length; i++){
    var response =  window.prompt(questions[i].prompt);
}