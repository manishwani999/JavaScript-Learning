// reduce method

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 90, 10];
const sumOfArr = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(sumOfArr);
