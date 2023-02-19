/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

// task #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// task #2
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} speed is ${this.speed}km/h`);
};

// task #3
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed is ${this.speed}km/h`);
};

// task #4
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(mercedes);

bmw.accelerate(); // 130
bmw.accelerate(); // 140
bmw.accelerate(); // 150
bmw.brake(); // 145

mercedes.accelerate(); // 105
mercedes.brake(); // 100
mercedes.brake(); // 95
mercedes.accelerate(); // 105
mercedes.brake(); // 100
mercedes.accelerate(); // 110
mercedes.brake(); // 105
mercedes.accelerate(); // 115
mercedes.accelerate(); // 125
