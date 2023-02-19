'use strict';
//////// constuctor functions and the new operator ////////
/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this, will copy the method to every instance
  this.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);
  };
};

// new Person('Oren', 1980);
// what happens?
// 1. new empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//instance
const oren = new Person('Oren', 1980);
console.log(oren);

// more instances
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1990);
console.log(matilda, jack);

const boris = {
  firstName: 'Boris',
  birthYear: 1977,
};

console.log(oren instanceof Person); // true
console.log(boris instanceof Person); // false

oren.calcAge();
jack.calcAge();
*/
