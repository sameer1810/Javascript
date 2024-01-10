//ceating object using constructor
// will create singleton
// Object.create-->this is object using const.



// object literals

const mySym = Symbol("key1")//creating symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//can't be print using operation like this console.log(JsUser.email)
    [mySym]: "mykey1",//syntax for symbol as a key value pair inside object 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//->syntax for prinitng symbol inside object

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)// freezes the further changes in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


//fn inside object 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//op->
/*
Hello JS user
undefined-->will learn frwrd
Hello JS user, Hitesh
undefined-->will learn frwrd
 */