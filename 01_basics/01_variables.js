/* In javascript you have three variable keywords const let and var, const and let are the one that is mostly used in modern javascript */

// let see what each variable does and how to declare them
const accountEmail = "email@gmail.com"
let accountPassword = "21202120"
var userName = "Sumit"
phoneNumber = 9999999990

// we have tried several keywords and without keyword to declare a variable , now let's see what each keyword provides us
// let's try to change the value of each variable
// accountEmail = "Email222@gmail.com"

accountPassword = "1234567890"

userName = "joy"

phoneNumber = 1010101010

// now to print this we will see use console.table method
console.table([accountEmail,accountPassword,userName,phoneNumber]);

// **Note: use node filename.js to run 

/* Did you get an TypeError: the error say that you are trying to change a variable that is constant.
don't worry: let fix this error by commenting the change we are trying to make in the constant variable
accountEmail = "Email222@gmail.com"
*/

// Now you may have question regarding this - phoneNumber = 9999999990
// the answer is simple javascript let's you do that , means that javascript let's you create a variable and store the data in memory without using any keyword , but i highly recommend not to do it because its not the proper way to declare a variable and if other programmer like you comes and see your code that if your variable is constant or normal variable

/* some tips :
        1. you should not use var keyword to declare variables because its doesn't understand the concept of block scope and functional scope (if you don't understand block scope and functional scope we will discuss this in the future lessons)
        2. you should also not declare variables without any keyword 
*/

// there is one more way to declare a variable
let accountState;
// if you don't assign any value to a variable , you will get
// comment the code above line no. 36 and try to run the following code: 
console.log(accountState);