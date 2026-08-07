/* // create string
let str = "Manish Wani";
let str2 = 'Manish Wani';

// string length
let length = str.length;
console.log(length);

// string indices
console.log(str[0]);

 */

/* 
// String literals

let specialString = `this is string literals`;

// string interpolation

let product = {
    name : "pen",
    price : 10
};

// using simple string
console.log("The product name is", product.name, "and its price is", product.price, "rupees"); 

// using template literals and string interpolation
let print = `The product name is ${product.name} and its price is ${product.price} rupees`;

console.log(print); 
 */


// escape characters in string
/* 
let str = "Manish\tWani";
console.log(str); */

// string methods

/* let str = "Manish";
let str2 = "Wani"
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); // remove white spaces from start and end of the string
console.log(str.slice(0, 6));
console.log(str.concat(str2));
console.log(str.replace("Manish", "Ankit"));
console.log(str.charAt(5)); */


// practice questions

// take a input name of user from user and create username with @, followed by their full name, and end with fullname length

let fullName = prompt("Enter Full Name : ");
let userName = "@" + fullName.concat(fullName.length);
console.log(userName);