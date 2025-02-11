
// Way to implement object
//constructor way
const obj1 = new Object({
    name : "sumit"
})
console.log("obj1:");
console.log(obj1);


// or
const obj2 = Object.create(obj1)
console.log("obj2:");
console.log(obj2.name);


//normal way
const obj3 = {
    name: "sumit"
}
console.log("obj3:");
console.log(obj3);


// using Map
const obj4 = new Map()
.set("name","sumit");
console.log("obj4:");
console.log(obj4);

// ways to access properties/values from object
console.log("/**********************************/")
const id = Symbol("uniqueID")
const jsUser = {
    [id]:"ras1@d",
    firstName:"Sumit",
    "last name":"Chakraborty",
    age: 18,
    location:"Assam",
    email:"sumit@outreachright.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Friday"]
}

console.log(jsUser.firstName);
console.log(jsUser["firstName"]);

// you cannot access last name and id using dot(.) notation
// console.log(jsUser.lastName); // undefined
// console.log(jsUser.id); // undefined

// the way is using square brackets([])
console.log(jsUser["last name"]);
console.log(jsUser[id]);


// way to declare and access functions in object
// functions are treated as any other data type 
console.log("/**********************************/")
jsUser.greeting = function () {
    console.log("Hello js user");
}

// how to reference the same object --> we use (this)
jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.firstName}`);
}

console.log(jsUser.greeting); // this will only return the reference to the function.
jsUser.greeting();
jsUser.greetingTwo();

