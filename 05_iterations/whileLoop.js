// while loop: It is used when you want to execute a block of code repeatedly as long as a certain condition remains true. The condition is checked at the beginning of each iteration.

/** use cases
 * iterates until a certain condition is met
 * Loop based on dynamic or unpredictable conditions
 * Post-determined loop flow.
 */

let i = 1;

while(i <= 10) {
    // console.log(i);
    i++;
}

const arr = ["Ram" , "Krishna", "Govinda"];


let j = 0;
// while(!(arr0[j] === "Krishna")) {
//     console.log("Not Krishna");
//     i++;
// }

// draw back of while loop: you may cause infinite loop, above is a example of it.

while(arr[j] !== "Krishna") {
    console.log("Not Krishna");
    j++;
}

console.log("found Krishna");