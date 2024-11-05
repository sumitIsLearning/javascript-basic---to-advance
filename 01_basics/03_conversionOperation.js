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

console.log(randomNumbertoBool, randomStringtoBool);

// 1 -> true , 0 -> false
// "1","sumit" -> true , "" -> false // use case: you use this to check if a string variable is empty or not



