/**
 * Extends the String prototype to calculate the length of the string after trimming.
 * @returns {string} A message stating the true length of the string after removing leading and trailing whitespace.
 */
String.prototype.trueLength = function() {
   return (`The True Length is: ${this.trim().length}`);
}

const heroName  = "Thor   ";
console.log(heroName.trueLength());


let heroPower = {
   thor:"hammer",
   spiderman:"sling",

   getSpiderPower: function() {
      console.log(`Spidy power is: ${this.spiderman}`);
   }
}

// The purpose of this code is to add a new method sumit that can be accessed by any object in the JavaScript environment. Since it's added to Object.prototype, this method becomes available to every object, whether it's a native JavaScript object or a user-defined object. 
Object.prototype.sumit = function() {
   console.log('sumit is present in all object');
}

// heroPower.sumit();


// inheritance

const User = {
   username: "sumit",
   email: "sumit@google.com"
}

const Teacher = {
   makeVideo: true
}

const TeacherSupport = {
   isAvailabe:true
}

const TASupport = {
   fullTime: true,
   makeAssignment: 'JS assignment',
   __proto__:TeacherSupport
}

Teacher.__proto__= User;

// moderSyntax
Object.setPrototypeOf(TeacherSupport , User) // BTS: this also uses __proto__ under the hood
