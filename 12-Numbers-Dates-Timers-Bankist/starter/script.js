'use strict';

///////////////// BANKIST APP /////////////////

/////// Data ///////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////// Elements ///////
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////// display movememnts ///////
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const movementType = mov > 0 ? 'deposit' : 'withdrawal';
    const htmlTemplate = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movementType}">#${
      i + 1
    } ${movementType}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', htmlTemplate);
  });
};

/////// calculate and display balance ///////
const calcAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce((accu, mov) => accu + mov, 0);

  labelBalance.textContent = `${account.balance}€`;
};

/////// calculate and display summary ///////
const calcAndDisplaySummary = function (movements, interestRate) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((accu, mov) => accu + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((accu, mov) => accu + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((accu, int) => accu + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

/////// create usernames from full names ///////
const createUsernames = function (accs) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0].toLowerCase())
      .join('');
  });
};

createUsernames(accounts);

/////// update the UI ///////
const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);

  // display balance
  calcAndDisplayBalance(acc);

  // display summary
  calcAndDisplaySummary(acc.movements, acc.interestRate);
};

/////// login ///////
let currentAccount;
// event handler
btnLogin.addEventListener('click', function (e) {
  // prevent for from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

/////// transfer money ///////
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount.username !== currentAccount.username
  ) {
    // do transfers
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

/////// request loan ///////
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    console.log('loaned');
    // add positive movement
    currentAccount.movements.push(amount);
    // updateUI
    updateUI(currentAccount);
  }
});

/////// close account ///////
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc =>
        acc.username === currentAccount.username &&
        acc.pin === currentAccount.pin
    );
    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});

/////// sort movements ///////
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//////// converting and checking numbers ////////
/*
// all number are represnted as decimals internally
console.log(23 === 23.0); // true

// Base 10: 0-9
// Base 2 (binary): 0-1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// convert string to number
console.log(Number('23'));
console.log(+'23');

// parsing
// must start with number
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN
console.log(Number.parseFloat('2.5rem')); // 2.5

// check isNaN
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN('23')); // false
console.log(Number.isNaN(+'23X')); // true
console.log(Number.isNaN(23 / 0)); // false

// check if value is number
console.log(Number.isFinite(23)); // true
console.log(Number.isFinite('23')); // false
console.log(Number.isFinite(+'23X')); // false
console.log(Number.isFinite(23 / 0)); // false

// check if integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.2)); // false
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger('23')); // false
console.log(Number.isInteger(23 / 0)); // false
*/

//////// math and rounding ////////
/*
console.log(Math.sqrt(25)); // 5 sqaure root
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2 cubic root

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI); // 3.1415...
console.log(Math.PI * Number.parseFloat('10px') ** 2); // circle area

console.log(Math.trunc(Math.random() * 6) + 1); // random number between 1 and 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(0, 7));
console.log(randomInt(10, 30));

// rounding
// remove decimal part
console.log(Math.trunc(23.3)); // 23

// round to nearest int
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// roud up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// round down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// trunc vs floow
console.log(Math.trunc(-4.2)); // -4
console.log(Math.floor(-4.2)); // -5

// round decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log(+(2.345).toFixed(2)); // 2.35
console.log(+(2.344).toFixed(2)); // 2.34
*/

//////// remainder operator ////////
/*
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(6 % 2); // 0

// check if number is even
const isEven = n => n % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(190)); // true
*/

//////// numeric separator ////////
/*
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const priceCents = 345_99;
console.log(priceCents);
*/

//////// BigInt ////////
/*
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991, this means that after this number calculation are not accurate
console.log(2 ** 53); // 9007199254740992
console.log(2 ** 53 + 1); // 9007199254740992

// bigint with n postfix
console.log(145284627942424254284629642n);
console.log(145284627942424254284629642n * 100000000n);

const huge = 183518471414518419414273242881n;
const num = 23;
// console.log(huge * num); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// to fix
console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == 20); // true

// divisions
console.log(10n / 3n); // 3n
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335
*/

//////// creating dates ////////
/*
// create a date
const now = new Date();
console.log(now);

console.log(new Date('Feb 08 2023 01:01:03'));
console.log(new Date('December 24, 2015'));
console.log(new Date('2019-11-18T21:31:17.178Z'));
console.log(new Date(2037, 11, 19, 15, 23, 5)); // note that month is zero based
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(Date.now());

future.setFullYear(2030);
console.log(future);
*/

//////// operations with dates ////////
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1);
*/

//////// internationalizing dates (Intl) ////////
/*
const now = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(now));
console.log(new Intl.DateTimeFormat('en-GB').format(now));
console.log(new Intl.DateTimeFormat('he-IL').format(now));

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

console.log(new Intl.DateTimeFormat('en-US', options).format(now));
console.log(new Intl.DateTimeFormat('en-GB', options).format(now));
console.log(new Intl.DateTimeFormat('he-IL', options).format(now));

const locale = navigator.language;
console.log(locale);
*/

//////// internationalizing numbers (Intl) ////////
/*
const num = 3884764.23;
console.log('US: ', new Intl.NumberFormat('en-US').format(num));
console.log('GR: ', new Intl.NumberFormat('de-DE').format(num));
console.log('SY: ', new Intl.NumberFormat('ar-SY').format(num));
console.log('PT: ', new Intl.NumberFormat('pt-PT').format(num));
console.log('UK: ', new Intl.NumberFormat('en-GB').format(num));
console.log('IL: ', new Intl.NumberFormat('he-IL').format(num));

let options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GR: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('SY: ', new Intl.NumberFormat('ar-SY', options).format(num));

options = {
  style: 'unit',
  unit: 'celsius',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GR: ', new Intl.NumberFormat('de-DE', options).format(num));

options = {
  style: 'percent',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GR: ', new Intl.NumberFormat('de-DE', options).format(num));

options = {
  style: 'currency',
  currency: 'EUR',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GR: ', new Intl.NumberFormat('de-DE', options).format(num));
*/

//////// timers: setTimeout and setInterval ////////
/*
// setTimeout
setTimeout(() => console.log('here is your pizza 🍕'), 3000);
console.log('waiting...');

setTimeout(ings => console.log(`you ordered pizza with ${[...ings]}`), 2000, [
  'olives',
  'onion',
]);

console.log(new Date());
setTimeout(() => console.log(new Date()), 3000);

const ingridients = ['mushrums', 'pineapple'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`you ordered pizza with ${ing1} and ${ing2}`),
  2000,
  ...ingridients
);

if (ingridients.includes('pineapple')) {
  clearTimeout(pizzaTimer);
}

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

// challenge clock
setInterval(function () {
  const now = new Date();
  console.log(
    new Intl.DateTimeFormat('he-IL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(now)
  );
}, 1000);
*/
