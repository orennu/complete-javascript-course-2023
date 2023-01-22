'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
