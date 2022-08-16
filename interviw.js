// let str=["i", "love", "india"]
// let i=-1
// while (i>(str.length)){
//     console.log(str[i])
//     i--
// }

// let str="I Love India"
// var newString = "";
// for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
// }
// console.log(newString)


// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
// console.log(reverseString("I love india"));

// let str="I Love India"
// var s = "";
// var i = str.length;
// while (i>0) {
//     if (str[i]==""){     
//     }
//     s += str.substring(i-1,i);
//     i--;
// }
// console.log(s)

// sent = "I like London in the rain"
// print(' '.join(sent.split()[::-1]))


// let reverstr = str.reverse(str)
// console.log(reverstr)


let str = "I love India"
function reverseString(str)
{
const strarr=str.split(' ');
let reverseStr=strarr.reverse();
reverseStr=reverseStr.join(' ');
return reverseStr;
}
console.log(reverseString(str));




