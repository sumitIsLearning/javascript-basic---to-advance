// all methods of number

// const score = 100000;

// console.log(score.toLocaleString("en-IN")); // => converts the number to India Number System
// console.log(score.toFixed(2)); // => Returns a string representing a number in fixed-point notation.
// console.log(score.toPrecision(4)) // => Returns a string represented either in exponential or fixed-point notation with a specified number of digits.
// console.log(score.toString()) //=> this basically convert the number to a string and returns it
// console.log(score.valueOf()); // => return the value of the object;

// // *************************************** Maths *********************************************
// console.log(Math.abs(-4)) // => this coverts negative value to positive value only , or absolute value
// console.log(Math.round(4.6)) // => rounds the value to the nearest integer

// console.log(Math.ceil(4.6)) // => returns the smallest value greater than or equal to its numeric agrument or original value;
// console.log(Math.floor(4.2)) //=> returns the greatest value less than or equal to its orginial value or numeric argument

// console.log(Math.pow(2 , 3)); // => returns the value based on the base and the power it is raised upon
// console.log(Math.max(1 , 2, 3 ,4 ,5 ,6)) // => returns the largest value 
// console.log(Math.min(1 , 2, 3 ,4 ,5 ,6)) //=> returns the smallest value

// console.log(Math.random()) //=> returns a random number between 0 and 1;

// // simple formula to get random numbers
// console.log((Math.random() * 10) + 1); // => now this will return a random number between 1 and 10;

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min); //=> returns value between min and max
// formula explained
/*
 1.max - min => is giving us the range and we are adding + 1 to avoid getting 0;
 2.Math.random() => will return a random number which will then get multiplied with the range we calculated 
 3. Math.floor() => as we have already discussed before floor will return the greatest value but less than or equal to its original value , or the numeric argument it has provided;
 4.+min => this will ensure that the value doesn't exceed minimum value;
*/