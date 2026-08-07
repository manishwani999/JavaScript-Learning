
// data types

// string - text always in quotes
const name = "Manish";
console.log(name);

// numbers - integers and decimals
let age = 21;
let price = 211.25;
console.log(age);
console.log(price);

// boolean - only true or false
let isLoggedIn = true;
let hasJob = false;
console.log(isLoggedIn);
console.log(hasJob);

// undefined - variable declared but no value given
let address;
console.log(address); // undefined

// null - intentionally empty
let value = null;
console.log(value);


/* 
const name = "Manish";
let age = 21;
let isStudent = true;
let jobTitle = null;
let city;
 */
/* 
console.log(name);
console.log(age);
console.log(isStudent);
console.log(jobTitle);
console.log(city); // undefined
 */
console.log(typeof(name)); // string
console.log(typeof(age)); // number
console.log(typeof(isStudent)); // boolean
console.log(typeof(jobTitle)); // object
console.log(typeof(city)); // undefined

const a = "hello";
let b;
let c = null;

console.log(typeof(a)); // string
console.log(typeof(b)); // undefined
console.log(typeof(c)); // object
console.log(b == c); // true



const student = {
    fName : "Ganesh",
    age : 25,
    address : "Pune"
}

console.log(student);
console.log(student.age);
console.log(student["age"]);
student.age = 26;
console.log(student.age);