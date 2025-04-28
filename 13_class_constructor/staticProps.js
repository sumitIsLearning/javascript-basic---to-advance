class User {
    constructor(username) {
        this.username = username
    }

    static createId() {
        return Math.floor(Math.random() * 999) + 100
    }

    logMe() {
        console.log(`id:${User.createId()} \nusername: ${this.username}`);
    }

}

const Arup = new User("Arup001");
Arup.logMe();


class Teacher extends User {
    constructor(username, email, classTeacherOf) {
        super(username);
        this.email = email;
        this.classTeacherOf = classTeacherOf;
    }

}

const abhijit = new Teacher("abhijit001", "abhijit@gmail.com", 10);
abhijit.logMe();