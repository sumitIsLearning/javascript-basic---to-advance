// what is scope 
// --> The scope is the current context of execution in which values and expressions are "visible" or can be referenced. Scopes can be layered in an hierarchy, so that child scope has access to parent scope but not vice versa.

// global scope --> The default scope.
// function scope --> The scope created with a function.
// block scope --> The scope created with the pair of curly braces.

// this is global scope
// let a = 3;
// const b = 4;
// var c = 6;

// if(true) {
//     let a = 30;
//     const b = 40;
//     var c = 60;
// }

/** uncomment this and above variables */
// console.log(a); // this will print "3" because a is present in global scope
// console.log(b); // this will print "4" because b is present in global scope
// console.log(c); // tell me what this will print.

// this block scope
if(true) {
    let a = 30;
    const b = 40;
    var c = 60;
}

// console.log(a); // this will give error a does not exist because a is present inside if block and block scope will not allow the variables to get out of that scope. It only lives inside that block.

// console.log(b); // same as a.
// console.log(c); // tell me what this will print.

// this is function scope
function greeting(name) {
    const message = "welcome to the shop"
    console.log(message , name);
    
}

console.log(message); // tell me if i can access the message variable or not