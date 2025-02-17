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

// this is block scope
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

// console.log(message); // tell me if i can access the message variable or not


// basic over view of closure
// lexical scope(parent scope) && nested scope(child scope)

function one() {
    const username = "sumit"

    function two() {
        const website = "outreachright.com"
        console.log(username); //✅ a child scope can access to parent scope variables. Meaning function two has access to username which is present in parent scope function one.
    }

    // console.log(website); //❌ but a parent scope has no access to the child scope variables.

    // eg. Think of it like as a , child can take the ice cream of a parent but parent cannot take the ice cream of a child.

    return two;
}

const three = one();
three();

//➡️ lexical scope is the scope in which a function(child) is defined and not where it is executed. It determines what variable the child function has access to depending on where it is defined in the code.

//➡️ closure is when a function(parent) returns another function(child) without calling it and that function(child) has still access to the variable of its parent function scope, even after the parent function has finished executing.


/*************** interesting thing about function ***********************/

console.log(addOne(5)); //✅ you can call the function before initializing it.
function addOne(num) {
    let numToInt = parseInt(num);
    if(isNaN(numToInt)) return;
    return numToInt + 1
}

// expression way to defining function
// console.log(addTwo(5)); //❌ you cannot call the function before initializing it.
const addTwo = function(num) {
    let numToInt = parseInt(num);
    if(isNaN(numToInt)) return;
    return numToInt + 2
}

//➡️ hosting is a javascript mechanisim where the function declaration and variable decalartion are moved(hoisted) to the top of their containing scope before the code execution.

// explanation for above example
// function declared with function keyword are hoisted that why we can call the function before initilization.

// function declared with function expression are not hoisted that why we cannot call the function before initilization.