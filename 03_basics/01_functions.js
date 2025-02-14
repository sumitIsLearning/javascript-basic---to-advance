// what is a function
//--> function is a block of code that can be reused through out the program, making code cleaner and efficient.

// ways to define function 
// --> with function keyword

function loggedInMessage() {
    console.log("Just logged in");
}

loggedInMessage(); // you have to call the function like this for the function to be executed;

loggedInMessage // --> this will never execute the function you have to add parentheses "()"; This only refers to the reference of the function.
console.log(loggedInMessage);
console.log("/********************************************************/");


// --> without function keyword/arrow functions
const logOutMessage = () => {
    console.log("just logged out");
}

logOutMessage(); // with parentheses
console.log(logOutMessage); // with out parentheses
console.log("/********************************************************/");


// lets talk about parameters and arguments
// you define parameter along with function

function logUser(username) { // The variable that will store the value passed is called parameter; you write the variable name inside the parentheses and it is defined along with function.
    console.log(`${username} just logged in`);
}

logUser("sumit"); // The value you pass to the function is called argument;

// what if i don't pass any argument/value to the function;
logUser(); // result --> undefined just logged in
console.log("/********************************************************/");

//**Note: when you use console.log that doesn't mean function will return the value, you have use a statement to return the value. */

// write a function that takes two number as input and returns the sum of numbers
function sum(num1 , num2) {
    const result = num1 + num2;
    return result; // here we are using a statement called return, which is explicitly saying to return the result.
    console.log("hi"); /**Note: Any code after the return statement will never execute */
    
}

const result = sum(2 , 3); // result --> 5;
console.log(result); // you have to log the result here now , you can also do it inside the function.

// what will happen now , we have talked about this in earlier lesson, during conversion lesson.
console.log(sum(2 , "3")); 
console.log(sum(2 , null));
console.log(sum(2 , undefined));
console.log("/********************************************************/");

// for this to not happen , we have to set conditions
function sum2(numOne , numTwo) {
    //first condition , will be to check if parameters are undefined.
    /**Note: i have used operators , you can google about operators and learn about them */
    if(!numOne || !numTwo) {
        return "Both the parameters are required"
    }

    // second condition, is to check if both are numbers;
    const numOneToNumber = parseInt(numOne);
    const numTwoToNumber = parseInt(numTwo);

    if(isNaN(numOneToNumber) || isNaN(numTwoToNumber)) {
        return "only type number is allowed"
    }

    // now we are sure that , when numOne and numTwo will reach here, they will be numbers
    return (numOneToNumber + numTwoToNumber);

}

console.log(sum2(2 , null));
console.log(sum2(2 , undefined));
console.log(sum2(2 ,"3"));
console.log(sum2(3 , "a"));
console.log(sum2(2));
console.log(sum2());

/**Note: learn about scopes , use google to learn about scopes
 * --> https://developer.mozilla.org/en-US/docs/Glossary/Scope
 */


//way to take multiple arguments , when you don't know the number of arguments.(...) the operator is similar to spread but it is called rest. It depends on the use cases.
function calculateCartPrice(...prices) {
    return prices.reduce((total , num) => {
        return total + num;
    })
}

console.log("price:", calculateCartPrice(200 , 300, 500, 1000, 2000));

