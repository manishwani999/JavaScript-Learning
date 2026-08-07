var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 10;
  let b = 20;
  console.log(a); // what will this print?
  console.log(b); // what will this print?
}

console.log(a); // what will this print?
console.log(b); // what will this print?

console.log(10 + "5");
console.log(true + 1);
console.log(false+1);
console.log(null+1); 
console.log(""==false);
console.log("" === false);


console.log(typeof typeof 1);