// what is IIFE
// --> IIFE stands for Immediately Invoked Function Expression. A Function that is immediately invoked after its definition.It is useful for creating private scope and preventing global variable pollution.

// ❌ This is not what i meant
// function greet() {
//     console.log("Hello world")
// }
// greet();

// ✅ This is what i meant
(function connnectDb() {
    // This is called a named IIFE
    console.log("server connected to DB")
}) (); /**Note: you should explicitly give semicolon(;) at the last because if you don't then you will get error, when you define another IIFE*/

// connnectDb() // this will give error, saying not defined

(() => {
    // This is called a no named / anonymous IIFE/ IIFE
    console.log("server connected to DB second time")
}) ();

/** why use IIFE
 * 1. Avoids global variable pollution
 * 2. Encapsulation 
 */

// how normal functions pollutes global scope, we also cannot access the varialbes inside normal function?

/**
 * 1. if defined in the global scope
 * 2. if using var instead of let or const
 * 3. if accidentally creating global variables(missing var/let/const)
 */

function greet() {
    console.log("hello world")
}

greet = "hello"; // the function is over written, because it is defined in global scope
console.log(greet); 


