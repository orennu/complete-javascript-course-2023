// exporting module
console.log('Exporting module');

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
