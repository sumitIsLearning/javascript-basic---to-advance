// what are loops
// -> Loops are control structure in programming that allow a set of instructions to be executed repeatedly until a specific condition is met. They help simplify repetitive task by avoiding code duplication.

//for loop : It is used when you want to execute a block of code a known number of times. It has a clear starting point, an ending condition and an increment/decrement(updater) step between iterations.

/** use cases
 * Iterates over a sequence like numbers in a list.
 * loop a fixed number of times
 * pre-determined loop count
 */

// ➡️ normal print
// for (let index = 0; index < 10; index++) {
//   if (index == 5) {
//     console.log("found the best number");
//   }

//   console.log(index);
// }

// ➡️ print pattern
// for (let index = 0; index < 10; index++) {
//   for (let j = 0; j <= index; j++) {
//     process.stdout.write("*")
//   }
//   console.log();
// }

// ➡️ print table
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
//   console.log();
// }



// ➡️ special keywords (break) & (continue)

// break stops the loop , and not further execution after break happens;
// continue forwards the loop to the next iteration;

const heros = ["batman" , "superman" , "thor" ,"fat-juicy&wet", "black-sexy-widow"]
// eg break
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
    
//     if(element === "fat-juicy&wet") {
//         console.log("found imposter");
//         break;
//     }

//     console.log(element);
// }

//eg continue
for (let i = 0; i < heros.length; i++) {
    const element = heros[i];
    
    if(element === "fat-juicy&wet") {
        const index = heros.findIndex((el) => el === "fat-juicy&wet");
        continue;
    }

    console.log(element);
}