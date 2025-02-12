// what is singleton pattern
// --> The singleton pattern ensures that only one instance of a class is shared across your entire application and no new instance from that class is ever created.

class singleton {
    constructor() {
        if(singleton.instance) {
            return singleton.instance
        }

        this.value = Math.random().toFixed(1);
        singleton.instance = this;
    }
    
}

// both instance point to the same object
const obj1 = new singleton(); 
const obj2 = new singleton();

console.log(`obj1: ${obj1.value} , obj2: ${obj2.value}`);
console.log("/*********************************************/");

// This above example of Object constructor is an example of singleton pattern

/** static method
 * @freeze --> freezes an object, freezing an object makes the existing properties of an object non-writeable and non configureable
 */

const obj3 = {
    name:"sumit",
    email:"s@gmail.com",
    address: {
        city:"lumding",
        district:"hojai",
        state:"assam"
    },
    age:21
}

obj3.name = "joy"
// console.log(`beforefreeze: ${obj3.name}`);

// console.log(obj3.address.city);

// Object.freeze(obj3);

obj3.name = "sumit" // all the properties of this instance are freezed.
// console.log(`afterfreeze: ${obj3.name}`);

// one thing to remember, nested objects are not freezed , 
// obj3.address.city = "guwahati";
// console.log(obj3.address.city);

//if you want to freeze. nested objects
function freezeAll(obj) {
    const objkeys = Object.keys(obj);
    Object.freeze(obj);

    //freeze if any nested object
    for (key of objkeys) {
        if((typeof obj[key] === "object") && !(Object.isFrozen(obj[key]))) {
            Object.freeze(obj[key]);
        }
    }
}

// now lets check
console.log(obj3.address.city);

freezeAll(obj3);

obj3.name = "joy";
console.log(obj3.name);


obj3.address.city = "guwahati";
console.log(obj3.address.city);

console.log("/*********************************************/");

// nested objects
const obj4 = {
    email: "s@google.com",
    name:{
        fullname: {
            firstName: "sumit",
            lastName: "chakraborty"
        }
    }
}

//access with dot notation
console.log(obj4.name.fullname.firstName);

// there is optional chaining with (?)
console.log(obj4.name?.fullname?.firstName);

// destructuring of object
const {firstName , lastName} = obj4.name?.fullname;
console.log(firstName , lastName);


console.log("/*********************************************/");

// way to combine objects
const obj5 = {a:"1" , b:"2"}
const obj6 = {c:"3" , d:"4"}

/**
 * @assign --> Returns modified target object , It takes two argument one target object and two sources which will get injected into the target object.
 */
console.log(Object.assign({} , obj5 , obj6));

// you can also use spread which is easy is my way
const combinedObj = {...obj5,...obj6};
console.log(combinedObj);
console.log("/*********************************************/");

/**
 * @keys --> Returns an array of keys from the object given as argument
 * @values --> Returns an array of values from the object given as argument
 * @entries --> Returns an array of array that contains the key and value of the object given as argument.
 * @hasOwnProperty --> Returns true/false based on , if the property/key name given as an argument exists in the object.
*/

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty("name"));
console.log(obj1.hasOwnProperty("value"));
