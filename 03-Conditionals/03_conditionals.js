/* let num = prompt("Enter a Number");
if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is NOT a multiple of 5");
} */

let score = prompt("Enter Score : ");
if(score >= 90 && score <= 100) {
    console.log("Grade A");
} else if(score >= 70 && score <= 89) {
    console.log("Grade B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade D")
} else if (score >= 0 && score <= 49){
    console.log("Grade F")
} else {
    console.log("Invalid input, Score must be between 0 - 100 ")
}