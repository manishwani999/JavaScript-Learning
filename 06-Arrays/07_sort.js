// sorting of strings
let names = ["Manish", "Ganesh", "Babita", "Ankit", "Chetan"];
names.sort();
console.log(names);
// Output : [ 'Ankit', 'Babita', 'Chetan', 'Ganesh', 'Manish' ]

// sorting numbers in ascending order
let nums = [50, 40, 20, 30, 10];
nums.sort((a, b) => {
  return a - b;
});
console.log(nums);
// Output: [ 10, 20, 30, 40, 50 ]

// sort numbers in descending order
let num = [50, 40, 20, 30, 10];
num.sort((a, b) => {
  return b - a;
});
console.log(num);
// Output: [ 50, 40, 30, 20, 10 ]
