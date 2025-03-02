// for of and for in loops are both used for iteration in javascript but serve different purpose based on the type of data they operate on.

// 1. for of:
//  ->primarily used to iterate over elements of arrays, strings, sets, Maps , etc.
//  -> syntax:


/** usage:
 * Directly accesses array elements by value.
 * Efficient and concise, especially for arrays.
 * Can be used with other collection types like strings or sets or Maps
 */

const arr = ["Ram", "krishna", "Govinda"];

const user = {
    firstName: "sumit",
    lastName: "chakraborty"
}

const map = new Map();
map.set("name","sumit");
map.set("age","21");

// for (const element of object) {
    
// }

/** Note:
 * The object you see, it a naming confic in js, it actually refers to data type Object
 */

for (const el of arr) {
    console.log(el);
}

//Q1. can we iterate over the key, value pairs(object)



// for (const el of user) {
//     console.log(el);
// } // ❌ No we cannot iterate over key,value pair(object)

//Q2. Map also holds key,value pairs, can we iterate over them
for (const el of map) {
    console.log(el);
}

// or, destructuring
for (const [key , value] of map) {
    console.log(`${key} :- ${value}`)
}

console.log("/****************************************************/");

// 2. for in 
//   -> primarly used to iterate over own enumerable properties of objects, including arrays.
//  -> syntax:
// for (const key in object) {
// }

/** usage:
 * Accesses Properties by key.
 * works with objects, dates, regular expressions, etc.
 */

for (const key in arr) {
    // console.log(key); // you will get index as key of array.
}

for (const key in arr) {
    console.log(arr[key]); // to access value you have to do this.
}

// key,value pair(objects)
for (const key in user) {
    // console.log(user.key); // you cannot do this, you will get undefined
    console.log(user[key]); // to access value you have to do this.
}

//Q1. can we iterate over Maps to
for(const key in map) {
    console.log(key) // you cannot iterate like this over Maps
}

// ### Key Differences:
/** for....of:
 * data types: Arrays and collections
 * property Access: Direct value access
 * performance: optimized for arrays
 */

/** for....in:
 * data types: Objects(and other types)
 * property Access: Property name and value
 * performance: General-purpose usage
 */

// Note: Attempting to use `for in` on an array might not always behave as expected if the array contains nested objects or references to other arrays.


console.log("/*************************************************/");

// higher order functions
// -> higher orde functions are functions that operates on other functions,either by taking them as arguments or returning them.

// -> in easy way , higher order function are function that either take another function as an argument or return a function as their result.

//eg.
arr.forEach(function(eachEl , index , orginialArr) {
    console.log(`each element: ${eachEl} , indexOfElement: ${index} , originalArray: ${orginialArr}`)
})

const customer = () => {
    return "sumit";
}

const greet = (customer) => {
    console.log(`welcome ${customer}`)
};

greet(customer());