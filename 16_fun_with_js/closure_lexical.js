// before understanding closure we have to learn about lexical scoping

/**
Lexical scope (also known as static scope) refers to the scope determined by where a function is defined in the source code, not where it's executed.
In lexical scoping:
    - A function has access to its own local variables
    - It also has access to variables in the outer (enclosing) scope where it was defined
    - This access remains even when the function is executed elsewhere

This is why closures work in languages like JavaScript - a function "remembers" its lexical environment (the variables available where it was defined) even when executed in a completely different context.
 */

//eg.
function makeFunc() {
  const name = "zen"; // local variable
  function Inner() {
    console.log(name); // use variable from outer scope
  }
  Inner();
}
makeFunc();

function init() {
  const name = "zen";
  console.log("Outer", browser); // ❌ ERROR - browser isn't defined here

  function inner() {
    const browser = "chrome";
    console.log(name); // ✅ Works - name is accessible from parent scope

    function child() {
      console.log(browser); // ✅ Works - browser is accessible from parent scope
    }
    child();
  }

  function innerTwo() {
    console.log(name); // ✅ Works - name is accessible from parent scope
    console.log(browser); // ❌ ERROR - browser is defined in inner(), not here
  }

  inner();
  innerTwo();
}

// Now lets understand closure
/**
 A closure occurs when a function (child) maintains access to variables from its parent function's scope even after the parent function has finished executing.
The key components of a closure are:
    - A parent function that defines variables in its scope
    - A child function defined within the parent function
    - The parent function returns the child function without executing it
    - When the child function is later executed, it can still access the       variables from its parent's scope

Closures are particularly powerful because they allow functions to "remember" and continue accessing their lexical environment, preserving data that would otherwise be lost when the parent function completes execution.
 */

//eg.
// This function creates a closure
function makeFunc2() {
    // Local variable defined in the outer function's scope
    const name = "Mozilla";
    
    // Inner function that forms a closure
    function displayName() {
      // This inner function has access to the outer function's variables
      console.log(name);
    }
    
    // Return the inner function without executing it
    // This preserves access to the name variable even after makeFunc2 finishes
    return displayName;
}
 
// When we call makeFunc2(), it returns the displayName function
// This function still maintains access to the name variable because of the closure
const myFunc = makeFunc2();

// When we execute myFunc, it can still access the name variable
// Even though makeFunc2 has already completed execution
// This is the essence of a closure - the preserved lexical environment
myFunc();  // Prints: "Mozilla"

