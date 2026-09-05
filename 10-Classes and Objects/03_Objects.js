/* 
    Object
    -> An object is a collection of properties and methods.
*/

const employee = {
  id: 1,
  name: "Manish",
  salary: 45000,

  work() {
    console.log(this.name + "is working");
  },
};

/* 
    id, name, and salary are properties
    work() is method.
*/

/* 
    How to access object properties
    -> there are two ways to access object properties
    ---> dot notation
    ---> bracket notation
*/

// Dot Notation -> use when property name is known
console.log(employee.name);
console.log(employee.salary);

// Bracket Notation -> use when property name is dynamic
console.log(employee["name"]);
console.log(employee["salary"]);

/* 
    when should you use bracket notation 
    - use when property name is dynamic.
*/

const property = "salary";
console.log("by bracket notation : " + employee[property]); // salary
console.log("by bracket notation : " + employee.property); // undefined

/* 
    Adding and removing properties in object
*/

const employee1 = {
  name: "Rahul",
};

// adding property

employee1.salary = 25000;
employee1.dept = "Chemical";

console.log(employee1);

// remove property
delete employee1.salary;
console.log(employee1);
