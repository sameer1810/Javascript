// const tinderUser = new Object()-->declaration of object using constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
/*op->{
    id: "123abc",
    name:"Sammy",
    isLoggedIn: false 
}
*/


//object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//op->hitesh



//merging if diff objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 const obj3 = { obj1, obj2 }
//ob->will create new object and which contains whole objest as value

const obj3 = Object.assign({}, obj1, obj2, obj4)
//->better method first parameter is target rest are source
//all the change are made in target not in source

const obj3 = {...obj1, ...obj2}//->best method
// console.log(obj3);



//usually data comes form database as 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email//op->h@gmail.com
// console.log(tinderUser);

 console.log(Object.keys(tinderUser));//-->will concert all the keys as arrays and return array
console.log(Object.values(tinderUser));//-->will concert all the value as arrays and return array

console.log(Object.entries(tinderUser));//-->will convert all the key value as an array ele and return 2D arr
//op-->[[key,val],[key,val],[key,val]]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));//-->if prop is presnt retun true else false




//++++ DESTRUCTURING OF OBJECT ++++//

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor)
//const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);
//line 88,90,92 gives same op ->hitesh
//above are destructure of obj



//+++  API +++//
//API are objects
//comes in JSon format


//example of Json
//the only diff btw jasona nd object is 
// in json keys are also treated as strings ie used by ""
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//SOMEITME API RECEVES IN ARRAY FORMAT
/*
[
    {},
    {},
    {}
]
*/
