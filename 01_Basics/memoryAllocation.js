//STACK AND HEAP
//STACK->primitve->call by value ie make duplicate
//HEAP->non-primitive->call by reference oe poitning toward s the original value.

//examples

//prmitive datatype, stack,call by value
let goal ="legend"
let target = goal

//console.log(target)//op->legend

target = "success"
console.log(target)//success
console.log(goal)//legend

//that means value just copied 

//non primitve, heap, call by reference

let user={
    name: "Sameeer"
    age:24
}

let user2 = user;

//console.log(user2.age)//op-?24

user2.age = 26
console.log(user.age)//op-?26
console.log(user2.age)//op-?26
//value change in both
//as call by refernce
//ie value at the location chnage where they were placed


