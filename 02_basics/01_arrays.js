const arr = [0 , 1, 2, 3, 4, 5];

const arr2 = new Array(1 , 2, 3, 4);
console.log(arr[0], arr2[0])

//property
console.log(arr.length);
// methods
arr.push(6) //=> adds a argument inside the orginal array, at the end of array
console.log(arr);
arr.pop(6); //=> removes the element specified in the argument, from the array
console.log(arr);

const newLen = arr.unshift(9) //=> Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);
console.log(newLen);

const firstElem = arr.shift() //=> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);
console.log(firstElem);

console.log(arr.includes(9)); // => returns you either true or false
console.log(arr.findIndex(item => item === 2)); //=> returns you the index of the item in the array
console.log(arr.find(item => item === 9)); //=> returns the item , by finding it , if not present returns undefined;

console.log(arr.indexOf(2)); // =>Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// slice splice

console.log(arr.slice(0 , 1)) //=> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(arr);

// The key difference between slice and splice is that slice doesn't manipulate the original array but splice does.

console.log(arr.splice(0 , 1 , 25)) //=> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr);

console.log(arr.join());

console.log(arr.reduce((prev , curr) => {
    return prev + curr;
})); // **Note: prev starts with index 0 item and curr starts with index 1 item , and as calculation goes on the prev value is replaced with the calculated value.
console.log(arr.reduce((prev , curr) => {
    return prev + curr;
},5)); // **Note: Now prev will start with the value given(5) and curr with start with index 0 item


// Array's data type is an object
// Array can store different datatypes
// Array is declare with [] square braces
// Array is non-primitive so it is a reference type , also copy of an array create a shallow copy(both original and copy array point to the same reference point)
// Array's value/items can be accessed using positive integers only
// Array is zero based indexing , meaning its indexing starts with 0

/** common and important method
 * @push -> add one or more element at the end of the array and return the new length of the array;
 * @pop -> removes the last element of an array and returns the element;
 * @unshift -> adds one or more element at the front of the array and returns the new lenght of the array
 * @shift -> removes the first of an array and returns the element
 * @slice -> Extract a section of the calling array and returns a new array , without modifying the original array
 * @splice -> adds and/or removes element from the calling array,effects original array.Returns the deleted elements
 * @join -> joins all element of an array with the given seperator into a string
 * @map -> returns a new array containing the result of invoking a function on every element of the calling array
 * @findIndex -> Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.
 * @find -> Returns the value of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.
 * @includes -> Determines whether the calling array contains a value, returning true or false as appropriate
 * @toSorted -> Returns a new array with the elements sorted in ascending order, without modifying the original array.
 * @reduce --> Returns a single value based on the reducer(callback function), the calculati on happens , where two arguments are present in as previous , current in the call back function , where previous value starts with index 0 item , if no initial value is provided , and current starts with index 1 item and as the calculation progresses the previous value is replaced with the calculated value and curr value progreess as index 1 , 2 ...n.if no items / empty array is provided it throws and error.
 */