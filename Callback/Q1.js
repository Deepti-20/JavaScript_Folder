// function show(a){
//     console.log("Hello" + a);
// }
// function hide(call){
//     var a = 'NavGurukul';
//     call(a);
// }
// hide(show);

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
console.log(sum)

function myFunction(item) {
    sum += item;
}
