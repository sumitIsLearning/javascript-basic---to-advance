
console.log( null > 0) //=> false // reason: the > operator converts null to 0 and compare 
console.log( null >= 0) // => true // reason : same as before , it is true because we have >= equal sign 
console.log( null == 0)// => false // reason : in == loose equality comparision the null is converted to undefined or rather js treats null and undefined as equals.

// for undefined every comparision is false
// you can check if you want
console.log(undefined > 0);
console.log(undefined == 0);  
console.log(undefined >= 0);

// basically comparision in js is sometimes tricky so you have to check and know what operator does what 
// like
console.log("2" > 2) // => this will first convert the string to a number and then compare 
// same for less than sign
console.log("2" == 2) // => this operator is called loose equality operator , because it only compares the value , it does same thing as less than or greater than , it converts the non-number value to a number 
console.log(true == 1)

// Now if you want to avoid this , you can use 
console.log("2" === 2) // => strict equality operator , it will not convert the type of the data rather it compares both datatype and value 
// if you are wondering is there any thing for > < >= <= operator , there is nothing for now , you have carefully check the value before you compare , but sometimes it is usefull try to code and figure out yourself why is it usefull.

console.log("_____________________")
