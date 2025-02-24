const userEmail = "s@outreachright.com"

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// here we have assumed that userEmail is present in first condition. how??: we have talked about this in previous leasons too.
// falsy values: "" , 0 , null , undefined , bigint(0n) , false , -0

// all other are truthy values
// eg.
// " " , "something" , positive number , negative number , [] , {} , function(){}

// how to check empty array
const Emails = [];

if(!Emails.length) {
    console.log("no emails available");
}

// how to check empty object
const userr = {};

if(!(Object.keys(userr).length)) {
    console.log("user not available");
}

// Nullish coalescing operator (??): null undefined

let val1;
val1 = null ?? 10; // if api called failed use the other option

// Ternairy Operator (?)

const temp = 100;

temp >= 80 ? console.log("temp is more than 80 celsius") : console.log("temp is less than 80 celsius");
;
