'use strict';

//////// default parameters ////////
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // default parameters before ES6
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', 2, 800);
createBooking('LY998', undefined, 1000); // skip 2nd parameter
console.log(bookings);
*/

//////// passing arguments: value vs. reference ////////
/*
// in javascript all arguments passed to a function are values, even when passing an object we pass in value of the object reference

const flight = 'LH123';
const oren = {
  name: 'Oren Nudelman',
  passport: 1438256492,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1438256492) {
    alert('Check in');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, oren);
console.log(flight); // 'LH123'
console.log(oren); // {name: 'Mr. Oren Nudelman', passport: 1438256492}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random * 1000000000);
};

newPassport(oren);
checkIn(flight, oren);
*/

//////// functions accepting callback functions ////////
/*
const oneWord = function (str) {
  return str.replace(/\s/g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  // fn is the callback function
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best', upperFirstWord);
transformer('javascript is the best', oneWord);

const high5 = function () {
  console.log('\u019b');
};

// here 'addEventListener' is the higher order function and 'high5' is the callback function
document.body.addEventListener('click', high5);

// another example, here 'forEach' is the higher order function and 'high5' is the callback function
['Yossi', 'Ben', 'Yogev'].forEach(high5);
*/

//////// functions returning functions ////////
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Oren');

greet('Hello')('Oren');

// challenge write above function as arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Liron');
*/

//////// the call and apply methods ////////
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Oren Nudelman');
lufthansa.book(176, 'Mike Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does NOT work
// book(123, 'Gil Man');

// call method
book.call(eurowings, 123, 'Gil Man');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 887, 'Jim Paton');
console.log(swiss);

// apply method
const flightData = [555, 'Ava Adams'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(eurowings, ...flightData);
console.log(eurowings);
*/

//////// the bind method ////////
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steve Williams');
bookLH(198, 'Avi Machluf');
bookLX(442, 'Sara Davis');

console.log(eurowings);

// setting constant argument with bind
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Liron Nudelman');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('button.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// same as --> addVAT = value => value + value * 0.23;
console.log(addVAT(100));

// challenge: create a function that returns addVAT function
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

// arrow
const addTax2Arrow = rate => value => value + value * rate;

const addVAT2 = addTax2Arrow(0.23);

console.log(addTax2(0.1)(100));
console.log(addTax2Arrow(0.1)(100));
console.log(addVAT2(100));
*/

//////// immediately invoked function expressions (IIFE) ////////
/*
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();
*/

//////// closures ////////
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    debugger;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
*/

//////// more closures ////////
/*
// example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    debugger;
    console.log(a * 2);
  };
};

const h = function () {
  const b = 700;
  f = function () {
    debugger;
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    debugger;
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/
