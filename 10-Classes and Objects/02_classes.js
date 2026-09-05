/* 
    Class in JavaScript?
    -> A class defines a structure and behaviour of objects.
    -> Class is a program code template for creating objects.
    -> Those objects will have some state (Variables) & some behaviour (Functions) inside it.
*/
class Car {
  start() {
    console.log("start");
  }

  stop() {
    console.log("Stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new Car();
fortuner.brand = "Toyota Fortuner";

/* 
    Constructor
    -> A constructor is used to initialize an object.
    -> constructor is a special type of method. automatically invoked by new keyword.
*/

class Bike {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let Shine = new Bike("Honda Shine");
let Splendor = new Bike("Hero Honda");
