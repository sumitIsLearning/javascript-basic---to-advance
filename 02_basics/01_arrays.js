const arr = [0 , 1, 2, 3, 4, 5];

const arr2 = new Array(1 , 2, 3, 4);
console.log(arr[0], arr2[0])

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


console.log(arr.join(","));