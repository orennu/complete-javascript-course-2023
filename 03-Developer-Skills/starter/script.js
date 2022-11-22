// Remember, we're gonna use strict mode in all scripts now!
'use strict';
////// editor setup //////
/*
// prettier (.prettierrc)
const xyz = 23;
const calcAge = birthYear => 2022 - birthYear;

// user snippest
// console.log(); // cl
// new Date().getFullYear(); // dfy

// todohighlight
// BUG
// NOTE
// TODO

// live-server (ext & node) -> live-server --port=PORT [PATH]

// for fun
const celsiusToFahrenheit = c => `${(c * 9) / 5 + 32}\u00B0F`;

console.log(celsiusToFahrenheit(-17));

const reverseNumber = function (num) {
  if (typeof num === 'number') {
    if (num > 0) {
      num -= num * 2;
    } else if (num < 0) {
      num += num * -2;
    }
    return num;
  } else {
    throw TypeError(`not a number: '${num}'`);
  }
};

console.log(reverseNumber(33));
*/

////// solve problem //////
/*
// PROBLEM 1
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error".

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// SOLUTION 1
// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temerature.
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do with it?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// naive solution
const removeErrorsFromArray = function (arr) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'error') continue;
    new_arr.push(arr[i]);
  }
  return new_arr;
};

const getMaxValue = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

const getMinValue = function (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

const calcTempAmplitude = function (tempArr) {
  const new_arr = removeErrorsFromArray(tempArr);
  const max = getMaxValue(new_arr);
  const min = getMinValue(new_arr);

  return max - min;
};

console.log(temperatures);
console.log(calcTempAmplitude(temperatures));

// PROBLEM 2
// Function should now receive 2 arrays of temperatures
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: NO!, just merge the 2 arrays into 1 array
// 2) Breaking up into sub-problems
// - merge 2 array

// SOLUTION 2

const newCalcTempAmplitude = function (tempArr1, tempArr2) {
  const tempArr = tempArr1.concat(tempArr2);
  const new_arr = removeErrorsFromArray(tempArr);
  const max = getMaxValue(new_arr);
  const min = getMinValue(new_arr);

  return max - min;
};

const temperatures2 = ['error', 8, 0, -18, -1, 'error', 9, 11, 15, 9, 15];
console.log(newCalcTempAmplitude(temperatures, temperatures2));
*/

////// debugging //////
/*
const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    value: prompt('Degree celsius:'), // before fix
    // value: Number(prompt('Degree celsius:')), // after fix
  };

  // B) FIND
  console.table(measurment);

  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

const findMax = function (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    debugger;
    if (arr[i] < min) min = arr[i];
  }

  return min;
};

console.log(findMax([1, 2, 3, -1]));
*/
