// old way of defining private properties
// the problem with is that the _properties can be accessed by user
class User {
    constructor(email, password) {
        this._email = email,
        this._password = password
    }

    set email(e) {
        this._email = e;
    }

    get email() {
        return this._email.toLowerCase();
    }

}

const userOne = new User("sumit@gmail.com", "sumi123");
console.log(userOne.email);

// modern way to doing this
// now user cannot directly access the private property they have use the getter way which we can modify according to our wish
class User2 {
    #email
    #password
    constructor(email, password) {
        this.#email = email,
        this.#password = password
    }

    set email(e) {
        this.#email = e;
    }

    get email() {
        return this.#email.toLowerCase();
    }

}

const userTwo = new User2("sumit@gmail.com", "sumi123");
console.log(userTwo.email);