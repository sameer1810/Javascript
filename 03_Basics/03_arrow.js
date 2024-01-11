/*++ this keyword++ */
// this keryword refers to the context of that scope

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//here this keyword refers to the properties of that object only
        console.log(this);//->this will retun whole object
    }

}

// user.welcomeMessage()//op-->hitesh ,welcome to website
// user.username = "sam"
// user.welcomeMessage()//op-->sam , welcome to website

console.log(this)//op->this will give empty object {} in nodjs 
                    //and  windows in browser as op


/*++ ARROW FUNCTION ++ */

function chai()
{
    let name = "sam"
    console.log(this.name);//op-->gives undefined -->we cant use this inside fn
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }//->this will also works same as above

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}//->this will also works same as above

// chai()

//arrow fn syntax

//method 1
//explicit return

const addTwo = (num1, num2) => {
         return num1 + num2
     }
//only return is written when curly braces use
     
    
//method 2 implicite return

const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) =>  (num1 + num2)//->better because we can't do above in case of object

