let pattern2 = require("readline-sync")
let num = pattern2.questionInt("enter the number..")

let emp_str=""
for(let i = 0; i < num; i++){
    for (let j=0; j<num; j++){
        emp_str += "# " 
    }
    emp_str += "\n"
}
console.log(emp_str)