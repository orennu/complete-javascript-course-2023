//////// variables ////////
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Oren");
console.log(23);

let firstName = "Oren";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "Oren";
let PI = 3.1415;

let myFirstJob = "security";
let myCurrentJob = "software developer";

console.log(myFirstJob);
*/

//////// comments ////////
// this is a single line comment
// console.log("Hello World!"); // comments can also come at the end of the statement
/* this is 
   a multiline
   comment
*/

//////// data types ////////
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Oren");

// dynamic typing in action, javascriptIsFun assigned value is changed from boolean to string
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1980;
console.log(typeof year);

// legacy bug in js, showing null as object
console.log(typeof null);
*/

//////// declaring variables (let, const, var) ////////
/*
// when declaring variables with let, we can re-assign values to the variable
let age = 42;
age = 43;

// when using let, variables can be declared first and assigned later
let color;
color = "blue";

// when declaring variables with const, we cannot re-assign values to the variable
// variables declared with const are immutable
const birthYear = 1980;

// trying to re-assign a value to const, e.g. birthYear = 1981; will result in
// Uncaught TypeError: Assignment to constant variable


// when using const, variables cannot be declared first and assigned later, there's must be an assigned value
// const title;
// above line will result in Uncaught SyntaxError: Missing initializer in const declaration

// prior to ES6, var was used to declare variables (DO NOT USE)
var job = "developer";
job = "king";
// let is block scoped and var is function scoped

// when assigning value to a variable without declaration (let/const), javascript adds the variable as property in the global scope (DO NOT DO THIS)
myName = "Oren";
console.log(myName);
*/

//////// basic operators ////////
/*
// arithmetic
const currentYear = 2022;
const ageOren = currentYear - 1980;
const ageLiron = currentYear - 2007;
console.log(ageOren, ageLiron);
console.log(ageOren * 2, ageOren / 10, 2 ** 3, ageLiron ** 2);

const firstName = "Oren";
const lastName = "Nudelman";
console.log(firstName + " " + lastName);

// assignment
let x = 10 + 5; // => 15
x += 10; // x = x + 10 => 25
x /= 5; // x = x / 5 => 5
x -= 3; // x = x - 3 => 2
x **= 4; // x = x ** 4 => 16
x *= 1.5; // x = x * 1.5 => 24
x++; // x = x + 1 => 25
x--; // x = x -1 => 24
console.log(x);

// comparison
console.log(ageOren > ageLiron); // >, <, >=, <=
console.log(ageLiron >= 18);

const isFullAge = ageLiron >= 18;
console.log(currentYear - 1980 > currentYear - 2007);
*/

//////// operator precedence ////////
/*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
const currentYear = 2022;
const ageOren = currentYear - 1980;
const ageLiron = currentYear - 2007;
console.log(currentYear - 1980 > currentYear - 2007);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10; x = 10
console.log(x, y);

const averageAge = (ageOren + ageLiron) / 2;
console.log(ageOren, ageLiron, averageAge);
*/

//////// strings and template literals ////////
/*
const firstName = "Oren";
const job = "Developer";
const birthYear = 1980;
const year = 2022;
const oren =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(oren);

const orenNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(orenNew);

console.log(`string
multiple
lines`);
*/

//////// decisions (if/else) ////////
/*
const age = 15;
const isLegalAge = age >= 18;

if (isLegalAge) {
  console.log("Maya can get her driver license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Maya is too young to drive, wait another ${yearsLeft} years 😉`);
}

const birthYear = 1980;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

//////// type conversion and coercion ////////
/*
// conversion
const inputYear = "1980";
console.log(inputYear, Number(inputYear));
console.log(inputYear + 18); // "198018"
console.log(Number(inputYear) + 18); // 1998
console.log(Number("oren")); // NaN
console.log(String(23), 23);

// coercion
console.log("I am " + 42 + " years old"); // + operator between string/s and number/s will convert number/s to string/s
console.log("23" - "10" - 3); // 10 -,*,/ operators will convert string/s to number/s
console.log("23" * "2"); // 46
console.log("52" / 2); // 26

let n = "1" + 1; // "11"
n -= 1; // 10
console.log(n);
*/

//////// truthy and falsy values ////////
/*
// JS falsy values:
// 1. 0
// 2. ''
// 3. undefined
// 4. null
// 5. NaN
// all other values are considered truthy
// when converting to boolean, falsy values are converted to false and truthy values are converted to true
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(10));
console.log(Boolean("oren"));
console.log(Boolean({}));
console.log(Boolean([]));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY!, height is defined");
} else {
  console.log("height is UNDEFINED");
}
*/

//////// equality operators (== vs. ===) ////////
/*
// === strict equality (no type coercion)
// == loose equlaity (type coercion)
const age = 18;
if (age === 18) console.log("is an adult"); // will log
if (age === "18") console.log("is an adult"); // will not log
if (age == "18") console.log("is an adult"); // will log
if (age != "18") console.log("is not an adult"); // will not log
if (age !== "18") console.log("is not an adult"); // will log

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 11) {
  console.log("cool, 11 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number is not 11 or 7");
}

if (favourite !== 11) console.log("why not 11?");
*/

//////// logical operators ////////
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sara should drive");
} else {
  console.log("someone else should drive...");
}

const isTired = true; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sara should drive");
} else {
  console.log("someone else should drive...");
}
*/

//////// switch statement ////////
/*
const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetups");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday": // day === "wednesday" || day === "thursday"
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😎");
    break;
  default:
    console.log("Not a valid day");
}

// above switch statement is exactly like below code
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetups");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😎");
} else {
  console.log("Not a valid day");
}
*/

//////// statements and expressions ////////
/*
// expression - small piece of code that produce a value
3 + 4;
1991;
true && false && !false;
// statement - larger piece of code that does not produce a value on itself
if (23 > 10) {
  const str = "23 is bigger";
}
*/

//////// conditional (ternary) operator ////////
/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink milk 🥛");

const drink = age >= 18 ? "wine 🍷" : "milk 🥛";
console.log(drink);

// without ternary operator 🤮
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "milk 🥛";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "milk 🥛"}`);
*/
