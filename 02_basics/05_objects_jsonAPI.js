// diff between json and object
// {
//     "name":"sumit"
// } --> this is json , it doesn't have any name and the key and value both are string.

const obj = {
    fullname: {
        userfullname:{
            firstName:"sumit",
            lastName:"chakraborty"
        }
    }
} // --> this is object

// obj destructuring , i have talked about it in earlier object lesson
const {firstName:first , lastName:last} = obj.fullname.userfullname
console.log(first ,last); // you can change their name according to your preference

// destructing is mostly used in react props

// how to call and api and handle it
// their are various ways to call and api , we will be using fetch the native client for calling api's
// what are api's --> API stands for Application Programming Interface, in other words when you don't want to solve the problem yourself you call an api that does it for you.

async function randomUserData() {
    const data = await fetch("https://randomuser.me/api/");    
    const stringifyData = await data.json();    
    return stringifyData;
}
// you have to study the jsondata that comes from that api. for that you can use json formatter.
// https://jsonformatter.org/

randomUserData()
.then((value) => {
    const email = value?.results[0]?.email;
    console.log(email);
})

