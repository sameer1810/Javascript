//inheritance

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)//we can use super keyword un place of .call
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()//op->A new course was added by chai
chai.logMe()//op->USERNAME is chai
const masalaChai = new User("masalaChai")

masalaChai.logMe()//op->USERNAME is masalaChai

console.log(chai === masalaChai);//op->false
console.log(chai === Teacher);//op->false

console.log(chai instanceof Teacher);//op->true
console.log(chai instanceof User);//op->true