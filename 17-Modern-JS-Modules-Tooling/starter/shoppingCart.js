// exporting module
console.log('Exporting module');

// blocking code - this will block the importing module execution until this module execution is finished
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');

const shippingCost = 10;
export const cart = [];

// named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// named export
export { totalPrice, totalQuantity as tq };

// export default
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
