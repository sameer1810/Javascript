var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c =30
    // console.log("INNER: ", a);
    
}



// console.log(a);-->a=300 even if inside if it is chnage
// console.log(b);-->b will give undefined coz out of scope
// console.log(c);-->c=30-->var doesnt have any scope


/*+++  NESTED SCOPES  +++*/

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);//runs fine
    }
    // console.log(website);-->Eroor , out of scope

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);->runs fine
    }
    // console.log(website);->Eroor , out of scope
}

// console.log(username);->Eroor , out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//->THIS WONT GIVE ERROR
//-<CAN USE BEFORE DECLARATION
function addone(num){
    return num + 1
}



addTwo(5)//->THIS WILL GIVES ERROR 
//-<CANT USE BEFORE DECLARATION,WHILE STORING IN VARIABLE
const addTwo = function(num){
    return num + 2
}