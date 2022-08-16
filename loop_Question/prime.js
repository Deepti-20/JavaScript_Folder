// let isPrime = true;
// console.log("Prime numbers from 1 to 100 are: ");
// for(let i=2; i <= 100; i++){
//   for(let j=2; j < i - 1; j++){
//     if(i % j == 0){
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     console.log(i);
//   }
//   isPrime = true;
// }


// let a = require("readline-sync");
// var num1= a.questionInt("enter your number--")
// function prime(){
//     let i=2
//     count=0
//     while (i<num1){
//         if(num1%i===0){
//             count=count+1
// 	        }
// 	        i++;
//         }       
//     if (count===0){
// 	   console.log("prime number")
//     }
// 	else{
//         console.log("not prime number")
//     }
// }
// prime()


let a = require("readline-sync");
var num1= a.questionInt("enter your number--")
let i=2
count=0
while (i<num1){
	if(num1%i===0){
		count=count+1
	    }
	    i++;
    }
if (count===0){
	console.log("prime number")
    }
	else{
        console.log("not prime number")
}