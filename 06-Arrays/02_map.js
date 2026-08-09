// map() method of array

let arr = [10, 20, 30, 40];

let newArr = arr.map((val) => {
  return val * val;
});

console.log(newArr);

let newA = arr.forEach((val) => {
  return val * val;
});

console.log(newA); // returns undefined
