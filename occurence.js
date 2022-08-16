// let input= [1,2,3,3,4,5,5,5,4,6,3,7,8,1,9,4,5]
// let i=0
// let count = 0
// let arr=[]
// while (i<input.length){
//     if (){
//         arr.push(count)
//     }else{
//         count++
//     }
//     i++
// }
// console.log(arr)



// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(counts[5], counts[2], counts[9], counts[4]);



// const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
//     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//   }, {});
  
//   console.log(occurrences) 



const arr = [1,2,3,3,4,5,5,5,4,6,3,7,8,1,9,4,5];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);




