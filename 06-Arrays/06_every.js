let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let status = arr.every((num) => {
  //   return num > 0; // true
  return num > 5; // false
});
console.log(status);
