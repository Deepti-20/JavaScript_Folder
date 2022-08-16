
let num = require("readline-sync")
let table = num.questionInt('enter number..')
let i=1
while (i<=table){
    let j=1
    while (j<=10){
        let multi = i*j
        console.log(i,"*",j,"=",multi)
        j++
    }
    i++
}  