var Data = {
    name: "cliff",
    age: "34",
    name: "ted",
    age: "42",
    name: "bob",
    age: "12"
  }


var fs = require('fs');
fs.writeFile("test.text", Data, function(err) {
    if (err) {
        console.log(err);
    }
});