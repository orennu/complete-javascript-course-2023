'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Levin',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//////// simple array methods ////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// slice - copy array (not mutate)

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -1)); // ['b', 'c', 'd']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// splice - mutate array
console.log(arr.splice(2)); // ['c', 'd', 'e'], arr = ['a', 'b']
arr.splice(-1); // removes last element from array
console.log(arr); // ['a']

arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(1, 2);
console.log(arr); // ['a', 'd', 'e']

// reverse - mutate array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// concat - concat 2 or more arrays (not mutate)
const a1 = ['a', 'b', 'c'];
const a2 = ['d', 'e', 'f'];
const a3 = ['g', 'h', 'i'];

const letters1 = a1.concat(a2);
console.log(letters1); // ['a', 'b', 'c', 'd', 'e', 'f']
// same as doing spread
console.log([...a1, ...a2]);

const letters2 = a1.concat(a2, a3);
console.log(letters2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

// join
console.log(letters2.join(' - ')); // a - b - c - d - e - f - g - h - i
*/

//////// the at method ////////
/*
const arr = [23, 11, 64];
// traditionally
console.log(arr[0]); // 23

// with at method
console.log(arr.at(0)); // 23

// getting last element traditionally
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64

// getting last element with at method
console.log(arr.at(-1)); // 64
*/

//////// loop array: forEach method ////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// with for of loop
console.log(`---- for of loop ----`);
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// with forEach
console.log(`---- forEach loop ----`);
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// for of with index
console.log(`---- for of loop with index ----`);
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement #${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement #${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// forEach with index
console.log(`---- forEach loop with index ----`);
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement #${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement #${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// you can also pass the array from forEach
console.log(`---- forEach loop with index and array ----`);
movements.forEach(function (mov, i, arr) {
  if (i === 0) {
    console.log(`Looping over [${arr}] with forEach is fun!!!`);
  }
  if (mov > 0) {
    console.log(`Movement #${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement #${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

//////// forEach with maps and sets ////////
/*
// map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'USD']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(value);
});
*/

//////// the map method ////////
/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

// challenge use map with arrow function to create movementsUSD
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

console.log(movementsUSDArrow);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement #${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
*/

//////// the filter method ////////
/*
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);
*/

//////// the reduce method ////////
/*
console.log(movements);

// const balance = movements.reduce(function (accu, cur, i, arr) {
//   console.log(`Iteration #${i}: ${accu}`);
//   return accu + cur;
// }, 0);

const balance = movements.reduce((accu, cur, i) => {
  console.log(`Iteration #${i}: ${accu}`);
  return accu + cur;
}, 0);

console.log(balance);

// maximum value
const max = movements.reduce(
  (accu, cur) => (accu > cur ? accu : cur),
  movements[0]
);

console.log(max);
*/

//////// chaining methods ////////
/*
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((accu, mov) => accu + mov, 0);

console.log(totalDepositsUSD);
*/

//////// the find method ////////
/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

const jessicaAccount = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(accounts);
console.log(jessicaAccount);

// challenge - find Jessica's account using for of loop
let jessicaAccount2 = {};
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    jessicaAccount2 = acc;
  }
}

console.log(jessicaAccount2);
*/

//////// some and every methods ////////
/*
console.log(movements);
// checks for equality
console.log(movements.includes(-130)); // true

// check for condition
// some - any element meets the condition
let anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit); // true

anyDeposit = movements.some(mov => mov > 5000);
console.log(anyDeposit); // false

// every - all elements meet the condition
anyDeposit = movements.every(mov => mov > 0);
console.log(anyDeposit); // false

anyDeposit = movements.every(mov => typeof mov === 'number');

console.log(anyDeposit); // true
console.log(account4.movements.some(mov => mov > 0)); // true

// seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//////// flat and flatMap methods ////////
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((accu, mov) => accu + mov, 0);
console.log(overallBalance);

// and now chaining it all together
const overallBalanceChained = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((accu, mov) => accu + mov, 0);
console.log(overallBalanceChained);

// flatMap
const overallBalanceChained2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accu, mov) => accu + mov, 0);
console.log(overallBalanceChained2);
*/

//////// sorting arrays ////////
/*
// mutate arrays

// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha', 'James'];
console.log(owners.sort()); // ['Adam', 'James', 'Jonas', 'Martha', 'Zach']
console.log(owners); // ['Adam', 'James', 'Jonas', 'Martha', 'Zach']

// numbers
console.log(movements);
// console.log(movements.sort()); // sorted as strings [-130, -400, -650, 1300, 200, 3000, 450, 70]

// sorting by numbers
// return < 0 -> a, b (keep order)
// return > 0 -> b, a (switch order)
// ascending
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

console.log(movements);

// decending
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});

console.log(movements);

// if a > b then a - b > 0 and if a < b then a - b < 0
// so....
// ascending
movements.sort((a, b) => a - b);
console.log(movements);

// decending
movements.sort((a, b) => b - a);
console.log(movements);
*/

//////// creating and filling arrays ////////
/*
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // empty array with length 7
console.log(x);

// fill
x.fill(1); // fill arrays with 1's
console.log(x);

const y = new Array(7);
y.fill(1, 3, 5); // fill arrays with 1's from index 3 till 5 (excluded)

console.log(y);

// from
const arr1 = Array.from({ length: 7 }, () => 1); // create array with 7 1's
console.log(arr1);

const arr2 = Array.from({ length: 7 }, (_, i) => i + 1); // create array with numbers from 1 - 7
console.log(arr2);

const arr3 = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(arr3);

// get numbers array from ui
document
  .querySelector('.balance__value')
  .addEventListener('click', function () {
    const movementsUI = Array.from(
      document.querySelectorAll('.movements__value'),
      el => Number(el.textContent.replace('€', ''))
    );

    console.log(movementsUI);
  });
*/

//////// array methods practice ////////
/*
// sum overall accounts deposit
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((accu, mov) => accu + mov, 0);

console.log(bankDepositSum);

// count all deposits at least 1000
const largeDeposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(largeDeposits);

// reduce all deposits and withdrawals to an object
const transfers = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (accu, cur) => {
      // cur > 0 ? (accu.deposits += cur) : (accu.withdrawals += cur);
      accu[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return accu;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(transfers);

// convert to title case: this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
