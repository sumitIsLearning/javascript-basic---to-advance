//lets start with object literals
const user = {
    username: "sumit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this); // this is the current execution context.
    }

}

console.log(user.username);
// console.log(user.getUserDetails()); // when you use console.log() on a function call, it prints the return value of that function. If the function does not explicitly return a value, JavaScript returns undefined by default. This is why you see undefined in the console after the messages logged by the function itself.

// user.getUserDetails(); // just do this if your method is logging message and not returning;


// Now lets talk about constructor function

function User(username , loginCount , isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.getUserDetails = () => {
        console.log(`username: ${this.username}`)
    }

    // return this;
}

// const userOne = User("sumit" , 8 , true);
// const userTwo = User("joy" , 8 , true);
// userOne.getUserDetails();
// uncomment the 36th line and run the code again and see what happens

// yes, this is frustrating to solve the problem we have one keyword that we have already used in previous topics
//"new"
const userThird = new User("rakesh" , 10 , false);
const userfourth = new User("mukesh" , 10 , true);

//The new keyword in JavaScript is used to create a new instance of an object that has a constructor function. It does more than just create an instance, it also sets the context (this) of the function to a new object and implicitly returns this object unless another object is returned explicitly.

/**
 * creates a new empty object.
 * sets the prototype of this object to User.prototype
 * Binds "this" to the new object in the User function, allowing properties and methods to be assigned to the new object.
 * Executes the body fo the User function with the given arguments, assigning the properties username, loginCount , isLoggedIn to the object.
 * Returns  the new object (unless the constructor explicitly returns a different object).
 */

console.log(userThird.constructor); //  log the constructor function that created the userThird object. 
console.log(userThird instanceof User); // checks if userThird is an instance of the User constructor. It will return true if userThird was created using the User constructor
