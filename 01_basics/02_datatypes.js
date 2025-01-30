// In the previous lesson we talked about varialble and how to define them and i have given you some tips
// In this lesson we will talk about different datatypes
// before that let talk about some important stuff of js
"use strict"; // when you say "use strict" , the interpreter starts treating all you code as newer version of js

// Now lets move to the actuall part of the lesson and talk about datatypes
// The datatypes are divided into two parts primitive datatype(system defined) and non-primitive datatypes
/*  7 primitive datatypes
        Number
        string
        Bigint
        Boolean
        Null
        Undefined
        Symbol
*/

/* non-primitive datatype
        Object
*/


// Now let try them one by one

// console.log("Null is of type:" + typeof null);
// console.log("Undefined is of type:" + typeof undefined);

const str = "sumit";
const bool = true;
const num = 20;
const syb = Symbol("nothing");
const obj = {
        key:"value"
}
const arr = [1 , 2 , "one","two"]

console.table([typeof str , typeof bool , typeof num , typeof syb ,typeof obj ,typeof arr])
