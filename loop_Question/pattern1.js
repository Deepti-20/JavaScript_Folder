// let n = 5; // row or column count

let pattern = require("readline-sync")
let num = pattern.questionInt("enter the number..")
let string = "";

for(let i = 0; i < num; i++) { // external loop
  for(let j = 0; j < num; j++) { // internal loop
    string += "j ";
  }
  string += "\n";
}

console.log(string);