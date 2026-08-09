// write a function for welcome

function myFunction() {
  console.log("Hello World!!!");
  console.log("We are learning JavaScript");
}

myFunction();

console.log(addd(5, 2));

/* 

--Output--

Hello World!!!
We are learning JavaScript

*/

// ways to define a function in JavaScript

// function declaration

function add(a, b) {
  return a + b;
}

// function expressions

const addd = function (a, b) {
  return a + b;
};

// arrow function

const sum = (a, b) => a + b;

const addTwoNum = (a, b) => {
  return a + b;
};

console.log("arrow function =", addTwoNum(10, 20));
