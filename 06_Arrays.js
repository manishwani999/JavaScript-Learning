// Arrays in JavaScript

let arr = [10, 20, 30, 40, 50];
console.log(arr.length);


// looping over array

/* for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let i of arr) {
    console.log(i);
}

for(let i in arr) {
    console.log(arr[i]);
} */


// practice question of an array

// find the average of an marks 

/* let marks = [80, 82, 54, 47, 66];

let sum = 0;
for (let mark of marks) {
    sum += mark;
}
let avg = sum / marks.length;
console.log(`The average marks of the class = ${avg}`); */


// array methods

arr.push(60);
console.log(arr);
console.log(arr.pop());
console.log(arr.toString());


let arr2 = ["Ganesh", "Rajesh", "Ramesh"];
console.log(arr.concat(arr2));

arr2.unshift("Shiva");
console.log(arr2);

arr2.shift();
console.log(arr2);

console.log(arr.slice(1,4));

arr.splice(2, 0, 101, 105);
console.log(arr);