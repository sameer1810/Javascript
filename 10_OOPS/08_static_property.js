class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())//op->will not run due to static keyword

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());//op->will not run due to static keyword

/*
The static keyword is used to define a static method named createId. Static methods are associated with the class itself rather than instances of the class. In this example, you don't need to create an instance of User to call the createId method.

Example of calling the static method:
const generatedId = User.createId();
console.log(generatedId); // Outputs: "123"

You don't call the static method on an instance (hitesh.createId() would not work), but rather on the class itself (User.createId()).
*/