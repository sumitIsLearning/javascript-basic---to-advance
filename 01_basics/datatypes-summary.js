// primitive datatypes

// 7 types : String , Number , Boolean , BigInt , NUll , Undefined , Symbol
// primitive datatypes are call-by-value


const id = Symbol(123);
const user_id = Symbol(123);

(id === user_id) ? console.log("true") : console.log("false")


// non-primitive datatypes
// 1 type: Object
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

// heros();


// different type of function declaration
// variable function
const myFunction = function() {
    console.log("variable function")
}
myFunction()
console.log(typeof myFunction)

function my() {
    console.log("keyword")
}

my();
console.log(typeof my)

const myFunction2 = () => {
    console.log("arrow")
}

myFunction2()
console.log(typeof myFunction2)

const arr = [1 , 2 , 3];
console.log(typeof arr)