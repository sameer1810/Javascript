function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    //SetUsername(username)--it is  called but execution context gets remove so the varubales also remove return empty thats why abive line is used
    //.call hold the refernece
    //and refernece is give by keyword this
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);