/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
 */

// 1) Understanding the problem
// - How to print the temperature symbol? Answer: \u00B0
// - How to print the day number? Answer: use the index and add 1 to it
// - How to create the string with data of all days? Answer: create initial string that starts with '...' and concat data of each day to it, then after loop is done return the concatenated string
// 2) Breaking up into sub-problems
// - Create initial temp string '...'
// - on each iteration create string template ` max_temp\u00B0FC in index+1 days ...`
// - on each iteration concat the created string template to temp string
// - on end of loop return concatenated string

const printForecast = function (tempArray) {
  let message = '...';
  for (let i = 0; i < tempArray.length; i++) {
    message += ` ${tempArray[i]}\u00B0C in ${i + 1} days ...`;
  }
  console.log(message);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
