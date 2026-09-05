/* 
    Prototype : Every JavaScript object can have link to another object called its prototype.
*/

const employee = {
  name: "Rahul",
};

/* 
    The object has access to methods inherited from its prototype.
*/

/* ----------------------------------------------------------------------------------------- */

// we can set the prototype using __proto__

const empTax = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 25000,
};

// set prototype for karanArjun
karanArjun.__proto__ = empTax;

// suppose you have multiple employees, then there is no need to to write same function for each employee. simply set prototype for each employee. e.g. as below.

const manish = {
  salary: 50000,
};

const anurag = {
  salary: 55000,
};

const rahul = {
  salary: 60000,
};

const vishal = {
  salary: 35000,
};

manish.__proto__ = empTax;
anurag.__proto__ = empTax;
rahul.__proto__ = empTax;
vishal.__proto__ = empTax;

/* 
    if the object and prototype have same method then the object's method will be used
*/

const vipul = {
  salary: 25000,
  calcTax() {
    console.log("tax rate is 20%");
  },
};

vipul.__proto__ = empTax;

/* 
    the tax rate for vipul is 20% not 10%
*/
