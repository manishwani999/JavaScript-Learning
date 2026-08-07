// for loop

/* for (let i = 1; i <= 5; i++) {
    console.log(i);
} */

// calculate sum of n numbers
/* let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("sum = ", sum); */

// while loop
/* let i = 1;
while (i <= 5) {
    console.log("i =",i);
    i++;
} */


// do while loop

/* let i = 12;
do {
    console.log("i =",i);
    i++;
} while (i <= 10);

 */

// for-of loop

/* let str = "JavaScript";
let length = 0;
for(let i of str) {
    length++;
}
console.log("String Size =",length); */

// for in loop
/* let student = {
    name : "Manish",
    age : 24,
    cgpa : 8.24,
    isPass : true
};

for(let key in student) {
    console.log(key,":", student[key]);
} */

// practice questions

// print numbers from 1 to 100

/* for(let i = 1; i <= 100; i++) {
    console.log(i);
} */

// print even numbers from 1 to 100
/* for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {   // even number logic
        console.log(i);
    }
} */


// guess the number game

let gameNum = 25;

let userNum = prompt("Guess The Number : ");

while(userNum != gameNum) {
    userNum = prompt("You entered wrong number, Guess again...");
}

console.log("Congrats!!!, You entered the right number.")




