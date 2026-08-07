// create function using function keyword, that takes a String as an argument and returns the number of vowels in the string

function numberOfVowels(str) {
  let count = 0;
  str = str.toLowerCase(str);
  for (let c of str) {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      count++;
    }
  }
  return count;
}

console.log("Number of Vowels =", numberOfVowels("JavaScript"));

// create an arrow function to perform the same task

const numOfVowels = (str) => {
  let count = 0;
  str = str.toLowerCase(str);
  for (let c of str) {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      count++;
    }
  }
  return count;
};

console.log("Number of Vowels =", numOfVowels("JAVASCRIPT"));
