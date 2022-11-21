"use strict";
//////// strict mode ////////
/*
// put "use strict"; in the begining of the file
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // Uncaught SyntaxError: Unexpected strict mode reserved word
// const private = 123; // Uncaught SyntaxError: Unexpected strict mode reserved word
*/

//////// functions ////////
/*
// function definition
function logger() {
  console.log("My name is Oren!");
}

// calling / running / invoking function
logger();
logger();
console.log(logger()); // undefined

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23"); // 23
*/

//////// function declarations vs. expressions ////////
/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

console.log(typeof calcAge1, typeof calcAge2);

// function declarations can be called before they are declared while function expressions cannot

// this will work
const sum1 = add1(2, 3);
console.log(sum1);

function add1(a, b) {
  return a + b;
}

// this will not work
const sum2 = add2(2, 3); // Uncaught ReferenceError: Cannot access 'add2' before initialization
console.log(sum2);

const add2 = function (a, b) {
  return a + b;
};
*/

//////// arrow function ////////
/*
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  return `${firstName} has ${65 - age} years until retirement 🤔`;
};

console.log(yearsUntilRetirement(1991, "Sam"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

//////// functions calling other functions ////////
/*
const cutFruitPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
};

console.log(fruitProcessor(2, 3));
*/

//////// reviewing functions ////////
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} has ${65 - age} years until retirement 🤔`);
    return retirement;
    console.log("log something"); // this will never execute
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
    console.log("log something"); // this will never execute
  }
};

console.log(yearsUntilRetirement(1991, "Sam"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//////// intro to arrays ////////
/*
// w/o arrays
const friend1 = "Tom";
const friend2 = "Nick";
const friend3 = "Harry";

// array literal
const friends = ["Tom", "Nick", "Harry"];

console.log(friends);

// with new keyword
const years = new Array(1990, 1984, 1945, 2020);

console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jack";
console.log(friends);

// friends = ["Anna", "Nicole"]; // Uncaught TypeError: Assignment to constant variable

const firstName = "Oren";
const oren = [firstName, "Nudleman", 2022 - 1980, "developer", friends];

console.log(oren);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const birthYears = [1980, 1990, 2014, 1967, 1928];

console.log(calcAge(birthYears[0]));
console.log(calcAge(birthYears[1]));
console.log(calcAge(birthYears[birthYears.length - 1]));

const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[birthYears.length - 1]),
];

console.log(ages);
*/

//////// basic array operations (methods) ////////
/*
const friends = ["Tom", "Nick", "Harry"];
let friendsLength = friends.push("Jack");

console.log(friends); // ["Tom", "Nick", "Harry", "Jack"]
console.log(friendsLength); // 4

friendsLength = friends.unshift("John");
console.log(friends); // ["John", "Tom", "Nick", "Harry", "Jack"]
console.log(friendsLength); // 5

let lastFriend = friends.pop();
console.log(friends); // ["John", "Tom", "Nick", "Harry"]
console.log(lastFriend); // "Jack"

let firstFriend = friends.shift();
console.log(friends); // ["Tom", "Nick", "Harry"]
console.log(firstFriend); // "John"

console.log(friends.indexOf("Nick")); // 1

console.log(friends.includes("Nick")); // true
console.log(friends.includes("Shlomo")); // false

friends.push(11); // ["Tom", "Nick", "Harry"]
console.log(friends.includes("11")); // false

if (friends.includes("Harry")) console.log("You have a friend called Harry");
*/

//////// intro to objects ////////
/*
const jonasArray = [
  "Jonas",
  "Schmedtman",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonasObject);

console.log(jonasObject.lastName);
console.log(jonasObject["lastName"]);

const nameKey = "Name";

console.log(jonasObject["first" + nameKey], jonasObject["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

// jonasObject.interestedIn // undefined
console.log(jonasObject[interestedIn]);

if (jonasObject[interestedIn]) {
  console.log(jonasObject[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonasObject.location = "Portugal";
jonasObject["twitter"] = "@jonasschmedtmann";

console.log(jonasObject);

// challenge
console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is ${jonasObject.friends[0]}`
);
*/
//////// object methods ////////
/*
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //   calcAge: (birthYear) => 2022 - birthYear,
  //   calcAge: function () {
  //     return 2022 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonasObject.calcAge());
console.log(jonasObject.age);

// challenge
console.log(jonasObject.getSummary());
*/

//////// for loop ////////
/*
// console.log("Lifting weights repetition 1 🦾");
// console.log("Lifting weights repetition 2 🦾");
// console.log("Lifting weights repetition 3 🦾");
// console.log("Lifting weights repetition 4 🦾");
// console.log("Lifting weights repetition 5 🦾");
// console.log("Lifting weights repetition 6 🦾");
// console.log("Lifting weights repetition 7 🦾");
// console.log("Lifting weights repetition 8 🦾");
// console.log("Lifting weights repetition 9 🦾");
// console.log("Lifting weights repetition 10 🦾");

// for loop syntax
// for(initialize loop variable; condition for running the loop; loop vartiable mutation) {
//    loop body
//}
// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🦾`);
}
*/

//////// looping arrays, break and continue ////////
/*
const jonasArray = [
  "Jonas",
  "Schmedtman",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// ...
// console.log(jonasArray[4]);

const jonasArrayTypes = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // filling array
  //   jonasArrayTypes[i] = typeof jonasArray[i];
  jonasArrayTypes.push(typeof jonasArray[i]);
}

console.log(jonasArrayTypes);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
// continue - stop current iteration and move to next iteration
// break - terminate the loop
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

//////// looping backwards and loops in loops ////////
/*
const jonasArray = [
  "Jonas",
  "Schmedtman",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// 0,1,...,4
// 4,3,...,0

// loop backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

// loop in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting exercise ${exercise} ----`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🦾`);
  }
}
*/

//////// while loop ////////
/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🦾`);
// }

let rep = 1;

while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 💪`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled a ${dice}, loop will end`);
}
*/
