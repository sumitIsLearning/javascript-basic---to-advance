const date = new Date;
/*
console.log(date.toString()); // => converts it to a string
console.log(date.toLocaleDateString("en-In")); //=> converts a date to a string using specified locales
console.log(date.toLocaleString("en-IN")); // => convets date and time to a string using specified  or current locales
// universal coordinated time
console.log(date.getUTCMilliseconds()); // => give you utc milliseconds
console.log(date.getUTCDay()+1); // => gives you utc day , **note**:count starts with zero;
console.log(date.getUTCFullYear()); //=> gives you full year 
console.log(date.getUTCHours()); //=> gives you hours 
console.log(date.getUTCMinutes()); //=> gives you minutes 
console.log(date.getUTCMonth()+1); //=> gives you month ,**note**:count starts with zero;
console.log(date.getUTCSeconds()); //=> gives you hours 


const myDate = new Date("11-29-2024");
console.log(myDate.toString());


const timeStamp = Math.floor(Date.now()/1000); // => gets you the timestamp 
console.log(timeStamp);
// if argument is internationalization and second one is dateFormat
const d = date.toLocaleString('en-US', {
    weekday:"short",
    day:"2-digit",
    month:"short"

})

console.log(d);
*/

console.log(date.toLocaleString("en-IN",{
    timeZone: "Asia/Kolkata",
    timeStyle:"short",
})) //**note** : you cannot use anyother properties of tolocaleString when you are using timeStyle 

