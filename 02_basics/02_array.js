const marvel_heros = ["thor" , "ironman","captain"]
const dc_heros = ["flash", "superman", "batman"]

// two ways to combine arrays
/**
 * @concat --> Return a new array without modifying the original one. It lets you combine two or more arrays.
 */
const collaborative_heros = marvel_heros.concat(dc_heros);
console.log(collaborative_heros);
console.log("/******************************** */");

/**
 * @spread (...) --> It is a operator that dismantles an array or object.
 */
const all_heros = [...marvel_heros , ...dc_heros];
console.log(all_heros);
console.log("/******************************** */");
/**
 * @flat --> Returns a new array , It concatinates the sub-arrays by recursively checking for sub-arrays to the specified depth. if not specified 
 default is 1.
 */

const arrNum = [1, 2, 3, [4, 5, 6], 6, 7 ,[6, 7 ,[4, 5, 6]]];
const num = arrNum.flat(2);
console.log(num);
console.log("/******************************** */");
// Array Static methods
/**
 * @isArray --> Returns True/False, based on if it is a array or not.
 */

console.log(Array.isArray("sumit"));
console.log(Array.isArray(num));
console.log("/******************************** */");
/**
 * @from --> Returns a new shallow copy of an array from a iterable or array like object. (is short you can covert anything to array)
 */
console.log(Array.from("sumit"));
console.log(Array.from({name:"sumit"})); // [], This will return empty array because it is not an iterable or array like object.

console.log(Array.from(Object.values({name:"sumit"})));
// or
const obj = new Map()
.set("name","sumit")

console.log(Array.from(obj));

console.log("/******************************** */");

/**
 * @of --> Returns a new instance of an array, It takes any type of variable as an argument and return a new array instance.
 */

const gameOneScore = 100;
const gameTwoScore = 200;

console.log(Array.of(gameOneScore , gameTwoScore));
