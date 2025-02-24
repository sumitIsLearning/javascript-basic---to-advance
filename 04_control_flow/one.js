// control flow is about controlling the environment.
// we use statements to evaluate if the condition is matching or not.

// eg.
const userIsLoggedIn = true;

// if(userIsLoggedIn) {
//     console.log("user is logged in");
// }

//➡️ here we are checking if user is logged in. The if keyword with a condition allows us to check if the condition is true or false and if the condition is true it will run the code inside the curly braces.

//➡️condition will only run when it evaluates to true

//➡️short hand method

// if(userIsLoggedIn) console.log("user is logged in"); // this is called implicity scope. 

/**➡️Note: you should only use this short hand if you want to execute a single line condition check. for multiple line use {}. */

// sometime people do this 
//❌ if(userIsLoggedIn) console.log("user is logged in") , console.log("executed"); // please don't do this.

/** comparison operators
 * == --> equal-to operator
 * < --> less than operator
 * > --> greater than operator
 * <= --> less than equal to operator
 * >= --> greater than equal to operator
 * != --> not equal to operator
  */

/**
 * === --> equal-to with type check
 * !== --> not equal-to with type check
 */

// all this operators will either evaluate to true or false.

// eg.
const temperature = 41;

if(temperature < 50) {
    console.log("less than 50");
} else {
    console.log("greater than 50");
}

// here you get to know about a new keyword called "else" which only runs if the above condition is false.

// we can do more
if(temperature < 50) {
    console.log("less than 50");
} else if(temperature > 50) {
    console.log("greater than 50");
} else {
    console.log("equal to 50");
}

// again you get to know about a new keyword called "else if" which only runs if the above condition is false. With else if you can add other conditions. Also you can add multiple else if.

// eg.

const month = "jan";

if(month == "jan") {
    console.log("january");
} else if (month == "feb") {
    console.log("february");
} else if (month == "march") {
    console.log("march");
} else if (month == "april") {
    console.log("april");
} else if (month == "may") {
    console.log("may");
} else if (month == "june") {
    console.log("june");
} else if (month == "july") {
    console.log("july");
} else if (month == "august") {
    console.log("august");
} else if (month == "sep") {
    console.log("september");
} else if (month == "oct") {
    console.log("october");
} else if (month == "nov") {
    console.log("november");
} else {
    console.log("december");
}

// there is a better way to do this

// using switch case statement
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    case "june":
        console.log("june");
        break;
    case "july":
        console.log("july");
        break;
    case "aug":
        console.log("august");
        break;
    case "sep":
        console.log("september");
        break;
    case "oct":
        console.log("october");
        break;
    case "nov":
        console.log("november");
        break;
    case "dec":
        console.log("december");
        break;

    default:
        break;
}