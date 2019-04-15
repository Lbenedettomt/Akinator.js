// Requiring fs module in which 
// writeFile function is defined. 
const fs = require ('fs');

// Data which will write in a file.

//IRUUUUUUUUUUUUUUUU
let data = "Learning how to write in a file." 

// Write data in 'Output.txt' 
fs.writeFile('Input.txt', data, (err) => {

    // In case of a error throw err. 
    if (err) throw err;

})

fs.readFile('Input.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    console.log(data);
})