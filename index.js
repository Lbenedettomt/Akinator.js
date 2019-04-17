const fs = require ('fs');
'use strict';

let rawdata = fs.readFileSync('personagens.json');
let personagem = JSON.parse(rawdata);
//This function handles parsing the raw data, converts it
//to ASCII text, and parses the actual JSON data in to a JavaScript object.
console.log(personagem);
