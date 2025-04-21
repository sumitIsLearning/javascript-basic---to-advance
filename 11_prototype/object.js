function multiplyBy5(num) {
    this.num = num;
}

function createUser(username , score) {
    // console.log(this.num); // here you will also notice something after implementing new keyword before createUser.
    this.username = username;
    this.score = score;

    this.printScore = function() {
        console.log(`price: ${this.score}`);
    }

    // return this;
}

multiplyBy5(5);
createUser("sumit" , 20);

// injecting methods in prototype
createUser.prototype.increment = function() {
    this.score++;
}

// createUser.prototype.printScore = function() {
//     console.log(`price: ${this.score}`);
// }

// this will not work, because we don't have the access to the additional properties/methods we have added to the createUser function.
// const chai = createUser("chai", 25);
// const tea = createUser("tea", 30);

// To solve this we have to use a keyword called "new".
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 30);
const coffee = createUser("coffee", 300);
// now chai and tea are separate object and instance of createUser.

chai.increment()
chai.printScore()
tea.printScore()
// coffee.printScore(); // this will only work if you explicitly return this from the constructor function;

/*

Here's what happens behind the scenes when the "new" keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/