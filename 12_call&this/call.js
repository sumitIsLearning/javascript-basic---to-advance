function setUserName(username) {
    this.username = username;
}

function createUser(username , email , password) {
    setUserName.call(this , username);// The .call() method allows you to call a function and manually set the value of this inside that function. This is useful when you want a function to run in the context of another object or execution scope.
    this.email =  email;
    this.password = password;
}

const userOne = new createUser("sumit","sumit@gmail.com","123");

console.log(userOne);
