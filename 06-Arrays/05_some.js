let arr = [1, 2, 3, 4, 5, 6, 7];

let status = arr.some((num) => {
  return num > 5;
});

console.log(status); // true
