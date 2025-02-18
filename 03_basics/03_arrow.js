const user = {
    username:"sumit",
    phone:"9999999999",

    welcome: function() {
        console.log(`${this.username}, welcome to the club`);
    }
}

user.welcome();

// ➡️ this is a special keyword that refers to an object related to the current execution context. Its value is determined by where and how it is called.
// -> In a method, this is the object that owns the method.
// -> In a standalone function (non-strict mode)  this refers to the global object.
// -> In strict mode, this is undefined in a standalone function.

// what is arrow function.
// ➡️ Arrow function is a short hand way to defining a function using (=>) syntax. Unlike regular function arrow functions do not have their own this. Instead they inherit this from their surrounding (lexical) scope.

//eg:1 -> example of arrow functions does not having "this" of their own.
const user2 = {
    username:"joy",
    welcome: () => {
        console.log(`${this.username}, welcome to the club`) //❌ undefined or error in strict mode.
    }
}

// eg:2 -> example of arrow functions inheriting "this" from the lexical(parent) context(scope)
user2.welcome();

const user3 = {
    username:"joy",
    welcome: function() {
        const greet = () => {
            console.log(`${this.username}, welcome to the club`) //✅ joy will get logged.
        }
        greet();
    }
}

user3.welcome();