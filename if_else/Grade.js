// Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let marks = require("readline-sync");
let Phy = marks.questionInt("enter physics number..")
let Che = marks.questionInt("enter Chemistry number..")
let Bio = marks.questionInt("enter Biology number..")
let Maths = marks.questionInt("enter Mathematics number..")
let Comp = marks.questionInt("enter Computer number..")

let per = ((Phy + Che + Bio + Maths + Comp)/500*100)
if (per >= 90){
    console.log("Grade A")
}
else if (per >= 80){
    console.log("Grade B")
}
else if (per >= 70){
    console.log("Grade C")
}
else if (per >= 60){
    console.log("Grade D")
}
else if (per >= 40){
    console.log("Grade E")
}
else if (per < 40){
    console.log("Grade F")
}