// callback function

function greet(name) {
  console.log("Welcome " + name);
}

function processUser(callback) {
  callback("Manish");
}

processUser(greet);
