//prototype behavior-->haar nahi mantti js

//prototype inheritance


//Q.find original length of string by creating own method
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){//creating heroPower.hitesh() on object 
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){//creating heroPower.hitesh() on Array
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()//have access coz given to object
// myHeros.hitesh()//have access coz given to object and obj is parent of arr
// myHeros.heyHitesh()//have access coz given to array
// heroPower.heyHitesh()//doesn't have access coz given to object


//++   INHERITANCE   ++

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//can inherit from teachingsupport
}

Teacher.__proto__ = User//teacher can use user prototype

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//TeachingSupport will access all the property of teacher


//solution of above problem
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()//also runs
"iceTea".trueLength()//also runs