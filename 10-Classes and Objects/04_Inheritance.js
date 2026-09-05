/* 
    inheritance
    -> inheritance is a process where child class aquires properties and behaviour of parent class.
    -> to inherit properties of parent class to child class we can use extends keyword.
*/

class Person {
  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("Solve problems");
  }
}

class Doctor extends Person {
  work() {
    console.log("diagnose patients");
  }
}

let Manish = new Engineer();
let Rahul = new Doctor();
