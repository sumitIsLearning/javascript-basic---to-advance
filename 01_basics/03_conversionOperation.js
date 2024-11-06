// today we will learn about type conversion and we will invesigation study 

// let's start with string to Number conversion
let stringNum = "33"

let stringNumToNumber = Number(stringNum);
// console.log(typeof stringNumToNumber);

/* you can also use parseInt to convert string to Number, the difference is that parseInt will return only the number that is present in the string and ignore the letters; */
// let stringNum2 = "33abc";
// let stringNum2ToNumber = parseInt(stringNum2);
// console.log(stringNum2ToNumber);

// And if you use Number to convert this type of string you will get a special type of value called NaN (Not a Number)
let stringNum2 = "33abc";
let stringNum2ToNumber = Number(stringNum2);
// console.log(stringNum2ToNumber);
// you can check if a value is NaN
if(isNaN(stringNum2ToNumber)) {
    // console.log("Not a valid Number")
}

// let's move on to Number to String
let num = 33;

let numToString = String(num);
// console.log(typeof numToString);

// you can also use 
let numToString2 = num.toString();
// console.log(typeof numToString2);


// Conversion from Number & string to boolean
let randomNumber = 1;
let randomString = "";

let randomNumbertoBool = Boolean(randomNumber);
let randomStringtoBool = Boolean(randomString);

// console.log(randomNumbertoBool, randomStringtoBool);

// 1 -> true , 0 -> false
// "1","sumit" -> true , "" -> false // use case: you use this to check if a string variable is empty or not

/***************************************Operations***********************************************/

// Operations are nothing but doing some process like
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 / 2)
// console.log(2 * 2)
// console.log(2 % 2)

// some operations may feel confusing like conversion of string to number can happen when you 
let sum = 2 + "2";
// console.log(sum);

// you may find some tricky operations like
console.log(+true) // => it does nothing but change the boolean to a number 
console.log(3 * 2 % 2 / 3 + 2) // => this is a example of bad readability , and you should never write code like this rather do this
console.log(((3 * 2) % (2/3)) + 2) // => see how readable the code is now , how easily you can understand what will happen first and next 
// next operation is short hand method of pre -> increment and decrement and post -> increment and decrement by one , we call them prefix and postfix
// prefix is used when you want to increment the value before its usage
let a = 2;
let b = ++a;
console.log("a: " + a , "b: " + b) ;
// (for decrement it is the same concept but it just decreases the value by one)

// and postfix is used when you want to use the value first and then increment it 
let c = 2;
let d = c++;
console.log("c: " + c , "d: " + d) ;
// (for decrement it is the same concept but it just decreases the value by one)

// you can learn more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment