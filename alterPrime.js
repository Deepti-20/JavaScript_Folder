// let a = require("readline-sync")
// let num = a.questionInt("enter the number..")
// let i=2
// while (i<=num){
//     let j=2
//     let count=0
//     while (j<i){
//         if (i%j==0){
//             count=count + 1
//         }
//         j++
//     }
//     if (count===0){
//         console.log(i,"prime")
//     }
//     i++
// }




function alterPrime(first,last){
    var i=0
    for(var x=first; x<=last;x++){
        if(x===0 || x===1){
            continue;
        }
        var count=0;
        for(var y=1; y<=last; y++){
            if(x%y===0){
                count++
            }
        }
        if(count<=2){
            i++;
            if(i%2!==0){
                console.log(x)
            }
        }
    }
}
alterPrime(0,100)

