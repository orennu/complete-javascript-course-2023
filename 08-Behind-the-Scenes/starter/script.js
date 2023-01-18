'use strict';

//////// scoping and scope chain ////////
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // firstName was found from the global scope, age & birthYear were found from outer function scope
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // this will create new variable firstName inside of this if block scope
      output = 'NEW OUTPUT'; // re-assign value to variable from outer scope
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // ReferenceError, str is in if block scope
    // console.log(add(2, 3)); // ReferenceError, functions are also blocked scope. this will work if strict mode is not set
    console.log(millenial); // millenial is scoped to printAge function and not if block scope due to var declaration
    console.log(output);
  }
  printAge();
  //   console.log(output); // ReferenceError, output is in printAge function scope

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(age);  // ReferenceError, age is in calcAge function scope
// printAge(); // ReferenceError, printAge is in calcAge function scope
*/

//////// hoisting and TDZ (Temporal Dead Zone) ////////
/*
// variables
console.log(me); // undefined
// console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addExprVar(2, 3));  // Uncaught TypeError: addExprVar is not a function
// console.log(addArrowVar(2, 3)); // Uncaught TypeError: addArrowVar is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
  return a + b;
};

var addArrowVar = (a, b) => a + b;

// hoisting pitfall example

console.log(numProducts); // at lines above numProducts declaration, the value of numProducts is undefined, so it is a falsy value and the statement in if block will execute
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

/// best practices
// 1. avoid using var for declaring variables
// 2. declare variables at the top of each scope
// 3. declare functions first and then call them

// another example
var x = 1; // variables declared with var create properties of the window object. let/const are not
let y = 2;
const z = 3;

// let's check if x,y,z are properties of window
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

//////// the this keyword ////////
/*
console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window object
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

//////// regular vs. arrow functions ////////
/*
var firstName = 'Matilda'; // creates a propert firstName on window object

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); // Hey Matilda

// don't use arrow function as method

// jonas.calcAge(); // Uncaught TypeError: Cannot read properties of undefined (reading 'year')

// solution #1 - assign this to other variable (self)
const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas1.calcAge();

// solution #2 - using arrow function
const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas2.calcAge();
*/

//////// the arguments keyword ////////
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(2, 3));

const addArrow = (a, b) => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  return a + b;
};

console.log(addArrow(2, 3));
*/

//////// primitives vs. objects ////////
/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('friend: ', friend); // friend: {name: 'Jonas', age: 27}
console.log('me: ', me); // // me: {name: 'Jonas', age: 27}


// primitives types
let lastName = 'Williams'; // points to memory address in stack with value 'Williams'
let oldLastName = lastName; // points to same memory address in stack with value 'Williams'
lastName = 'Davis'; // points to new memory address in stack with value 'Davis'

console.log(lastName, oldLastName); // Davis Williams

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}; // points to memory address in stack with value that references to memory address in heap with object value

const marriedJessica = jessica; // points to same memory address in stack with value that references to memory address in heap with object value
marriedJessica.lastName = 'Davis'; // change was made to the same object in heap memory
console.log('Before marriage: ', jessica); // Before marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('After marriage: ', marriedJessica); // After marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27}

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy, nested objects not copied
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('James');
console.log('Before marriage: ', jessica2); // Before marriage: {firstName: 'Jessica', lastName: 'Williams', age: 27, family: ['Alice', 'Bob', 'James']}
console.log('After marriage: ', jessicaCopy); // After marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27, family: ['Alice', 'Bob', 'James']}
*/
