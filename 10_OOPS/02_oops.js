//object literal

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);//this will give current context
        console.log(this);//this  will guve whole obj
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);//empty obj in node and window obj in browser


//constructor fn
//so that wecan add new entries
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){//can also use method
        console.log(`Welcome ${this.username}`);

    }

    return this//not neceassry to write this
}

//if we didn't use new keyword
//the entires will over write 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//return refernce about itself-->google it also google about instanceof
//console.log(userTwo);

//when new keywod is used
//an empty obj is created which is called instance
//then construction fn is called
//in third steps all the arg will inject inside this object
//in fourth step the obj will return