class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

}

class Teacher extends User {
    constructor(username, email, classTeacherof) {
        super(username);
        this.email = email;
        this.classTeacherof = classTeacherof;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

}

const abhijit = new Teacher("abhijit001", "abhijit@gmail.com", 8);
console.log(abhijit);

const masaalaChai = new User("masaalaChai");
console.log(masaalaChai);
masaalaChai.logMe();


console.log(abhijit === masaalaChai);
console.log(masaalaChai instanceof Teacher);
console.log(Teacher instanceof User);
console.log(abhijit instanceof Teacher);


