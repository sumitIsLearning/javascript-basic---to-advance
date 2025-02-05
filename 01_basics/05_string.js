/**
 * @String --> String is one of the primitive data types in JavaScript. It is also used in various programming languages. In general, a string is a collection of characters used to form words or sentences.
 */
// initialize a string
const name = "sumit"; //--> this is a string, anthying inside the quotaion is considered to be string.

// string concatenation
console.log("Hello " + name);
/* This is one way to combine strings using + operator, another way is string interpolation */

// string interpolation
console.log(`Hello ${name}`) //(using template literals)
/* This is a modern way of combining strings , It uses backticks(``) and allows variables to be injected/embedded directly the string using(${}). */

/**
 * @length --> It is a property of the string, that gives us the lenght of the string
 */

// string methods
// methods do not effect the original string

/** search methods
 * @charAt --> Returns a single character from the string or you can also treat the string as an array and can use the array way to access the character ("sumit"[1] , let name = "joy"; name[1]);
 * 
 * @indexOf --> Returns the indexOf the character that you have given as an argument to the method, if present , otherwise returns -1 if not found.
 * 
 * @includes --> Returns true or false based on the argument being present or not.The argument is a string/character that you want to search in the original string.
 * 
 * @search --> Returns the index of the first match in the string. The argument is a regex(regular expression). The search method searches for a match between regex and the string.
 * 
 */
console.log("/******************** search ***************************************/")

console.log(name.charAt(1));
console.log(name.indexOf('u'));
console.log(name.includes('t'));
console.log(name.search(/t/));

// chaining
console.log(name.includes(name.charAt(name.indexOf('u'))));


/** create new modified string
 * @subString --> Returns a part of the string from the start index(including) to the end index(excluding).If no end index is given this runs to the end of the string.
 * 
 * @slice --> Return a new String without modifying original string. This extracts a section of the original string and create a new string from it.
 * 
 * @replace --> Returns a new string with one ,some or all matches of a pattern replaced by the replacement. The pattern can be a string or a regex, and the replacement can be a string of a function called for each match. If the pattern is a string, only the first occurance will be replaced. without modifying the original string.
 * 
 * @trim --> Returns a new string with whitespaces removed from both the start and end.No arguments needed. there is also trim.start() and trim.end() 
 * 
 * @toUpperCase --> Returns a new string converted to uppercase.
 * 
 * @toLowerCase --> Returns a new string converted to lowercase.
 */

const para = "Hi , My name is Sumit, and i am a programmer"
const para2 = "   Hi , My name is Sumit, and i am a programmer  "

console.log("/********************* modified string **************************************/")

console.log(para.substring(0 , 4));
console.log(para.slice(0 , 21));
console.log(para.replace("programmer" , "Problem Solver"));
console.log(para2.trim());
console.log(para.toUpperCase());
console.log(para.toLowerCase());

/** create array from string
 * @split --> Returns an array of substrings. This takes a pattern as an argument and divides the string into an ordered list of substrings by searching for that pattern and then put these substrings into an array.
 * 
 */

console.log("/*************************** string to array *******************************/")

console.log(para.split(','));