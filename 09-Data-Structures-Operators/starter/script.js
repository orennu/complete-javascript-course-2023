'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

//////// destructuring arrays ////////
/*
const arr = [1, 2, 3];
// tedious
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with ES6 destructuring
const [x, y, z] = arr;

console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , third] = restaurant.categories;
// console.log(first, third);

// switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// tedious
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// with ES6 destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destrurcturing
const nestedArr = [2, 3, [4, 5, [6, 7]]];
// destructure even values from nested array
const [i, , [j, , [k]]] = nestedArr;
console.log(i, j, k);

// default values
let [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined
[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
*/

//////// destructuring objects ////////
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// define different names for variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  openingHours: {
    fri: { open: o, close: c },
  },
} = restaurant;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

//////// the spread operator (...) ////////
/*
const arr = [7, 8, 9];
// tedious
const badBewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badBewArr);

// using ES6 spread operator
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets. but NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// real world example
const ingridients = [
  // prompt("Let's make pasta!\n ingrident 1:"),
  // prompt('ingrident 2:'),
  // prompt('ingrident 3:'),
];
console.log(ingridients);

// call a function with multiple arguments tedious
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);

// call a function with multiple arguments with the spread operator
restaurant.orderPasta(...ingridients);

// spread objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Joseph' };
console.log(newResturant);

const restaurantCopy = { ...restaurant }; // shallow copy
restaurantCopy.name = 'El Gauco';
console.log(restaurantCopy.name); // El Gauco
console.log(restaurant.name); // Classico Italiano

restaurantCopy.mainMenu[0] = 'Steak';
console.log(restaurantCopy.mainMenu); // ['Steak', 'Pasta', 'Risotto']
console.log(restaurant.mainMenu); // ['Steak', 'Pasta', 'Risotto']

restaurantCopy.openingHours.fri.open = 13;
console.log(restaurantCopy.openingHours.fri.open); // 13
console.log(restaurant.openingHours.fri.open); // 13
*/

//////// Rest pattern and parameters
/*
// 1) destructuring
// SPREAD because ... is on the RIGHT of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

console.log(add(1, 2));
console.log(add(4, 7, 9));
console.log(add(1));

const x = [2, 5, 8, 3];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

//////// short circuiting (&& and ||) ////////
/*
// logical operators (&& and ||) use any data type, return any data type and do short circuiting
// short circuiting in OR returns the first 'truthy' value or last value (if all are falsy)
console.log('--- OR ---');
console.log(3 || 'oren'); // 3
console.log('' || 'oren'); // oren
console.log(true || 0); // true
console.log(0 || false); // false

// assign default value without short circuiting, this will not work as expected if the property exist and has a falsy value, e.g. restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

// assign default value with short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

// short circuiting in AND returns the first 'falsy' value or last value (if all are truthy)
console.log('--- AND ---');
console.log(0 && 'oren'); // 0
console.log('oren' && ''); // ''
console.log('oren' && undefined && 7); // undefined
console.log('oren' && 7); // 7

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onion');
}

// now using &&
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion');
*/

//////// the nullish coalescing operator ////////
/*
// this will not work as expected if the property exist and has a falsy value
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

// nullish coalescing fix it, nullish values: null and undefined only
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
*/

//////// logical assignment operators ////////
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rossi',
};

// assignment with logical OR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// now with logical assignment operator OR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// now with logical assignment operator nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// now with logical assignment operator AND
rest1.owner &&= 'anonymous'; // this does not behave like rest1.owner = rest1.owner && 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1, rest2);
*/

//////// for of loop ////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// loop over elements of the array
for (const element of menu) console.log(element);

// loop over entries (index, item) of the array
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}. ${element}`);
}

console.log([...menu.entries()]);
*/

//////// enhanced object literals ////////
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // ES6 enhanced object literal - compute property names
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal - use object instead of key/value
  openingHours,

  // ES6 enhanced object literal - get rid of semi-colon and function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

console.log(restaurant2);
console.log(restaurant2.order(2, 2));
*/

//////// optional chaining (?.) ////////
/*
// without optional chaining
// console.log(restaurant.openingHours.mon.open); // TypeError

// with optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open} `);
}

// methods
console.log(restaurant.order?.(0, 1));
console.log(restaurant.cancel?.(1) ?? "no 'cancel' method");

// arrays
const users = [{ name: 'jonas', email: 'jonas@jonas.io' }];

console.log(users[0]?.name ?? 'no such index');
console.log(users[1]?.name ?? 'no such index');
*/

//////// looping objects ////////
/*
// keys
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

// values
const values = Object.values(restaurant.openingHours);
console.log(values);

// entries
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we are open at ${open} and close at ${close}`);
}
*/

//////// sets ////////
/*
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // {'Pizza', 'Pasta', 'Rissoto'}
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // {'Pizza', 'Pasta', 'Rissoto', 'Garlic Bread'}

ordersSet.delete('Rissoto');
console.log(ordersSet); // {'Pizza', 'Pasta', 'Garlic Bread'}

// ordersSet.clear();
// console.log(ordersSet); // {}

for (const order of ordersSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']

// unique letters in a string
console.log(new Set('orennudelman').size); // 9
*/

//////// maps ////////
/*
const rest = new Map();
rest.set('name', 'Classisco Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

console.log(
  rest
    .set('Categories', restaurant.categories)
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are close')
);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2);
console.log(rest.size);

// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
*/

//////// maps iteration ////////
/*
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'wrong, try again'],
]);

console.log(question);

// convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key}. ${value}`);
  }
}

const answer = Number(prompt('Your answer:'));
console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//////// working with strings 1 ////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(airline.length); // 16
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

// exercise
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  console.log(
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
      ? 'middle seat'
      : 'side seat'
  );
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

//////// working with strings 2 ////////
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// fix capitalization in name
const passenger = 'jOnAS';
const passengerCorrect = `${passenger[0].toUpperCase()}${passenger
  .slice(1)
  .toLowerCase()}`;

console.log(passengerCorrect);

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerAndTrimmedEmail = loginEmail.toLowerCase().trim();

console.log(lowerAndTrimmedEmail);
console.log(lowerAndTrimmedEmail === email);

// replacing
const priceGB = '288,97\u00a3';
const priceUS = priceGB.replace('\u00a3', '\u0024').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate')); // only replace 1st occurence of door

console.log(announcement.replace(/door/g, 'gate')); // replace all occurences of door

// booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A320')); // true
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log("it's part of the new airbus family");
}

// exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on baord');
  } else {
    console.log('Welcome onboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

//////// working with strings 3 ////////
/*
console.log('a+very+nice+string'.split('+'));
console.log('Oren Nudelman'.split(' '));

const [firstName, lastName] = 'Oren Nudelman'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (nameStr) {
  const namesList = nameStr.toLowerCase().split(' ');
  const newNamesList = [];
  for (const name of namesList) {
    // newNamesList.push(`${name[0].toUpperCase()}${name.slice(1)}`);
    newNamesList.push(name.replace(name[0], name[0].toUpperCase()));
    // newNamesList.push(
    //   name.replace(name.charAt(0), name.charAt(0).toUpperCase())
    // );
  }

  return newNamesList.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('oren nUDelman'));

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Oren'.padStart(25, '+').padEnd(30, '+'));

// mask credit card number
const maskCreditCard = function (number) {
  const str = number + '';
  return str.slice(-4).padStart(str.length, '*');
};

console.log(maskCreditCard(4580123456789876));
console.log(maskCreditCard('4580123858558456789876'));

// repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)

const convertAirportCodeToAbbr = airportCode =>
  airportCode.replace(/[0-9]/g, '').toUpperCase();

for (const flight of flights.split('+')) {
  let [info, departingAirport, arrivingAirport, time] = flight.split(';');
  info = info.replaceAll('_', ' ').trim();
  departingAirport = convertAirportCodeToAbbr(departingAirport);
  arrivingAirport = convertAirportCodeToAbbr(arrivingAirport);
  time = time.replace(':', 'h');

  const output = `${
    info.startsWith('Delayed') ? '🔴' : ''
  } ${info} from ${departingAirport} to ${arrivingAirport} (${time})`.padStart(
    44
  );
  console.log(output);
}
