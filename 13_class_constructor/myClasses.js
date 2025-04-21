// This is just syntactical sugar 
// added after ES6

/**
 * Represents a user in the system.
 */
class User {
    /**
     * Creates an instance of User.
     * @param {string} username - The username of the user.
     * @param {string} email - The email address of the user.
     * @param {string} password - The password of the user.
     */
    constructor(username, email, password) {
        this.username  = username;
        this.email = email;
        this.password = password;
    }

    /**
     * Retrieves the user's username and email.
     * @returns {string} A formatted string containing the username and email.
     */
    getUser() {
        return `username: ${this.username} \nemail: ${this.email}`;
    }

    /**
     * Retrieves the user's password with additional characters.
     * @returns {string} The user's password concatenated with 'abc@@'.
     */
    getPassword() {
        return `${this.password}abc@@`;
    }
}

// const userOne  = User("sumit", "sumit@google.com", "123"); //---> ❌ if you try to create User instance you have to use the "new" keyword.

const userOne  = new User("sumit", "sumit@google.com", "123");
console.log(`userOne: ${userOne.getUser()}`);




// under the hood of classes

function Users(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    // return this; // and you don't have to return this explicitly if you are using new keyword
}

Users.prototype.getUser = function() {
    return `username: ${this.username} \nemail: ${this.email}`
}
Users.prototype.getPassword = function() {
    return `${this.password}abc@@`
}

// const userTwo = Users("joy", "joy@paytm.com", "124"); // ---> ❌ you cannot access prototype methods without using the new keyword to create a fresh instance of the object

const userTwo = new Users("joy", "joy@paytm.com", "124");
console.log(`userTwo: ${userTwo.getUser()}`); 

// Inheritance: we will talk about this later