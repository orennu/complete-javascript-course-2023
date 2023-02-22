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

//////// prototypes ////////
/*
console.log(Person.prototype);

// add method to the object via prototypal inheritance
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

console.log(Person.prototype);
console.log(oren);

oren.calcAge();
jack.calcAge();

console.log(oren.__proto__);
// Person.prototype is actuall Person.prototypeOfLinkedObject
console.log(oren.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(oren)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// add property via prototypal inheritance
Person.prototype.species = 'Homo Sapiens';
console.log(oren, jack);
console.log(oren.species, jack.species);

console.log(oren.hasOwnProperty('firstName')); // true
console.log(oren.hasOwnProperty('species')); // false
*/
//////// prototypal inheritance on built-in objects ////////
/*
console.log(oren.__proto__); // Person.prototype
console.log(oren.__proto__.__proto__); // Object.prototype
console.log(oren.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

// array
const arr = [3, 4, 5, 6, 6, 3, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// extend Array
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.log(h1.__proto__.constructor); // HTMLHeadingElement
console.log(h1.__proto__.__proto__.constructor); // HTMLElement
console.log(h1.__proto__.__proto__.__proto__.constructor); // Element
console.log(h1.__proto__.__proto__.__proto__.__proto__.constructor); // Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.constructor); // EventTarget
console.log(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
); // Object

console.dir(x => x + 1);
*/

//////// ES6 classes ////////
/*
// class expression
const PersonExp = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
};
// class declaration
class PersonDec {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const jessica = new PersonDec('Jessica', 1996);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonDec.prototype); // true

// you can still add methods to prototype
PersonDec.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

// 1. classes are not hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

const james = new PersonExp('James', 1977);

console.log(james);
james.calcAge();
*/

//////// setters and getters ////////
/*
// getters and setters in object literal
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// getters and setters in classes
class PersonDec {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
}

const oren = new PersonDec('Oren Nudelman', 1980);
console.log(oren);
console.log(oren.age);

const walter = new PersonDec('Walter', 1965);
*/

//////// static methods ////////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

Person.hey();
// jonas.hey(); // Uncaught TypeError: jonas.hey is not a function

class PersonDec {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // static method - not available on instances
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const oren = new PersonDec('Oren Nudelman', 1980);
PersonDec.hey();
oren.hey(); // Uncaught TypeError: oren.hey is not a function
*/

//////// Object.create ////////
/*
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto); // true

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
sara.calcAge();
*/

//////// inheritance between "classes": constructor functions ////////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // calling the Person constructor function with call method, this is not inheritance
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');

console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student.prototype.constructor);
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true
*/

//////// inheritance between "classes": ES6 classes ////////
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 🖐️');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // call to super need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        new Date().getFullYear() - this.birthYear
      } years old, but as a student I feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      }.`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2001, 'Compuetr Science');
martha.introduce();
martha.calcAge();
*/
