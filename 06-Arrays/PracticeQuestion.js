// we are given array of marks of students. filter out the marks of students that scored 90+

const arr = [87, 85, 94, 91, 90, 54, 77, 97];

let marks = arr.filter((mark) => {
  return mark >= 90;
});

console.log(marks);

// take a number n as input from user. create an array of numbers from 1 to n

let n = prompt("Enter n : ");

let array = [];

for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}

console.log(array);
// use reduce method to calculate sum of all numbers in the array

let sum = array.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log("Sum of all elements", sum);

// use reduce method to calculate product of all numbers in the array

let product = array.reduce((prev, curr) => {
  return prev * curr;
});

console.log("product of all elements", product);
