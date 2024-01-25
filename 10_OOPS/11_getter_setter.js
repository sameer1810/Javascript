class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

     //getter and setter used simultaneously


    //password is overwrite and stores in _password varibale not in password 
    get password(){
        return `${this._password}hitesh`
    }

    set password(value){//this.password=value//op->stack overflow coz constructor and setter both setting the value
        
        this._password = value//therefore new variable is used
    }


    get email(){
        return this._email.toUpperCase()
    }
    set email(value){//setting the value
        this._email = value
    }

   
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);