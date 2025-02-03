// primitive datatypes

// 7 types : String , Number , Boolean , BigInt , NUll , Undefined , Symbol
// primitive datatypes are call-by-value


const id = Symbol(123);
const user_id = Symbol(123);

(id === user_id) ? console.log("true") : console.log("false")


// non-primitive datatypes
// 3 type: Object , array , function
// non-primitive datatypes are Reference-of-the-address-in-memory

// const heros = ["IronMan" , "Thor" , "Bruce Banner"];

// so an example of passing by reference 
function addHeros(hero , heros) {
    hero = "MYDAD"
    heros.push(hero);
    console.log(hero) // passed by value
    console.log(heros) // passed by referrence
}

function heros() {
    const heros = ["IronMan" , "Thor" , "Bruce Banner"];
    const hero = "captain"
    addHeros(hero, heros)
    console.log(hero)
    console.log(heros)
}

console.log(typeof heros);


// different type of function declaration
// variable function
const myFunction = function() {
    console.log("variable function")
}
myFunction()

function my() {
    console.log("keyword")
}

my();

const myFunction2 = () => {
    console.log("arrow")
}

myFunction2()

const arr = [1 , 2 , 3];
console.log(typeof arr)

// ****************************************** Memory *********************************************
// you don't have to worry about memory management in javascript , because javascript does it for you , it has a garbage collector which manages memory for you, but regarless of this you should know somethings about memory 
// Memory are of two types stack and Heap
// primitive datatypes uses stack memory 
// and non-primitive datatypes uses Heap memory

// eg. of stack 
let num = 22
let anotherNum = num;
console.log(num , anotherNum) // => they both will have same value
// now if i change the values of another num 
anotherNum = 30;
console.log(num , anotherNum) //=> without running this can you tell me what will happen here

// eg. of Heap
const user = {
    name: "sumit"
}

const anotherUser = user;

anotherUser.name = "Joy"
console.log(user.name , anotherUser.name) //=> without running this can you tell me what will happen here

// The answer to the above question is that for stack
// the value of num will be same as before only the value of anotherNum will change because i case of primitive datatype the anotherNum got a copy of the num's value 
// but incase of user and anotherUser both of their values are changed because they both point to a single value and like they get a reference of the value so we are actually changing one value 


// ********************** test run ***************************************/
console.log("/**************************************/")
console.log(5 >= true);
