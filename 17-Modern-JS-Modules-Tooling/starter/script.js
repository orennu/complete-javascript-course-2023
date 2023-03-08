//////// exporting and importing in ES6 modules ////////
/*
// importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');
// console.log(shippingCost); // won't work since shippingCost is not xported, hence private to module

// import everything at the same time
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import default
// import add from './shoppingCart.js';
// add('milk', 2);

// import named and default
// as best practice mix of deafult and named exports are not recommended
// import add, { totalPrice as price, tq } from './shoppingCart.js';

// add('pizza', 3);
// console.log(price, tq);

import { addToCart, cart } from './shoppingCart.js';

console.log(cart);

addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apples', 4);

console.log(cart);
*/

//////// top-level await (ES2022) ////////
/*
// only works in modules

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

import './shoppingCart.js';

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); // Promise

// not clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

//////// the module pattern ////////
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantities = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantities,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined
*/

//////// CommonJS Modules ////////
/*
// will not work with browser, relevant for nodeJS
// export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// import
const { addToCart } = require('./shoppingCart.js');
*/

//////// intro to npm ////////
/*
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateCloned = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateCloned.user.loggedIn); // false
console.log(stateDeepClone.user.loggedIn); // true


// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';
import { addToCart, cart } from './shoppingCart.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

console.log(cart);

addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apples', 4);

console.log(cart);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
console.log(stateDeepClone.user.loggedIn); // true

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';

  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const oren = new Person('Oren');

console.log('oren' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';

// polifiling async functions
import 'regenerator-runtime/runtime';
*/
