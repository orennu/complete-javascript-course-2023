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
