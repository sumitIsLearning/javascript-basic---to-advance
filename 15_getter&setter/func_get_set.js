function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email
        },

        set: function(value) {
            this._email = value
        }
    })

}

const userOne = new User("Sumit@gmail.com", "sumit123");

console.log(userOne.email);
