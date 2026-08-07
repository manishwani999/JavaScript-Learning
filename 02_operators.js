
// arithmetic operators

console.log("Arithmetic Operators");

let a = 10;
let b = 5;
console.log("a = ", a , " & b = ",b );
console.log("a + b = " , a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);   // 10^5


console.log();

// Assignment Operator
console.log("Assignment Operators")
let score = 10;
console.log("score = ", score);
console.log("score += 5 --> ", score += 5);
console.log("score -= 5 --> ",score -= 5);
console.log("score *= 5 --> ",score *= 5);
console.log("score /= 5; --> ",score /= 5);

console.log();

// Unary Operators
console.log("Unary Operators ")

console.log("score++ --> ", score++, "Score after update : ", score);
console.log("score-- --> " , score--, "Score after update : ",score);

console.log();


// Comparison Operator

console.log("Comparison Operator")

a = 10;
b = "10";

console.log("a = ", a , " & b = ",b);
console.log("a == b  --> ", a == b);
console.log("a === b --> ",a === b);
console.log("a != b  --> ",a != b);
console.log("a !== b --> ",a !== b);
console.log("a > b   --> ",a > b);
console.log("a >= b  --> ", a >= b);
console.log("a < b   --> ",a < b);
console.log("a <= b  --> ",a <= b);


/*
// Logical Operator
let hasResume = true;
let hasSkills = true;
let hasExperience = false;

// AND - both must be true
console.log(hasResume && hasSkills);
console.log(hasSkills && hasExperience);

// OR - at least one must be a true
console.log(hasResume || hasExperience);
console.log(hasExperience || false); // both false then return false

// NOT - flips the value
console.log(!hasExperience);
console.log(!hasResume);
*/


// Ternary Operators
console.log("Ternary Operators")

let age = 12;
let res = age >= 18 ? "Adult" : "Not Adult";
console.log(res);




/* 
let price = 500;
let discount = 50;
let quantity = 3;

// calculate final bill
let finalPrice = (price - discount) * quantity;
console.log("Final Price:",finalPrice);

// check if bill is above 1000
console.log(finalPrice > 1000);

// check type equality
let input = "3";
console.log(quantity == input); // lose check
console.log(quantity === input); // strict check

// logical check - apply discount only if price > 400 && quantity > 2
let applyDiscount = price > 400 && quantity > 2;
console.log("Apply Discount:", applyDiscount);

 */



