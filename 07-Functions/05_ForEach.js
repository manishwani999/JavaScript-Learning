// for each function in javascript

let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  console.log(val);
});

// callback function -> a function pass as an argument in another function is known as callback function

let cities = ["Pune", "Delhi", "Mumbai", "Chalisgaon"];

cities.forEach((val) => {
  console.log(val.toUpperCase());
});

// practice question

// for a given array of numbers prit the square of each value using the forEach loop

let array = [2, 4, 6, 8, 10];

array.forEach((val) => {
  console.log(val * val);
});
