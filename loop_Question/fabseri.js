var readlineSync = require("readline-sync");
var num = readlineSync.questionInt("enter number: ");
var x=0
var y=1
var i=0
while(i<=num){
    console.log(i)
    x=y
    y=i
    i=x+y
}