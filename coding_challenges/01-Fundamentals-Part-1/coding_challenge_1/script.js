/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHigherBMI;
// Data 1
console.log("/// Data 1 ///");
[markMass, markHeight] = [78, 1.69];
[johnMass, johnHeight] = [92, 1.95];
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("Mark", markMass, markHeight, markBMI);
console.log("John", johnMass, johnHeight, johnBMI);
console.log("markHigherBMI", markHigherBMI);

// Data 2
console.log("/// Data 2 ///");
[markMass, markHeight] = [95, 1.88];
[johnMass, johnHeight] = [85, 1.76];
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log("Mark", markMass, markHeight, markBMI);
console.log("John", johnMass, johnHeight, johnBMI);
console.log("markHigherBMI", markHigherBMI);
