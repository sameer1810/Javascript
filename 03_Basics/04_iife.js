// Immediately Invoked Function Expressions (IIFE)

//1.gloabal scope ke pollution se bachane ke liye IIFE use krte hai
// 2.databse ki imidiately connect krne ke liye bhi use krte hai

//IIFE syntax
//()()
// first paranethesis for declaration 
//second is for calling

//named iife

    (function chai(){
        // named IIFE
        console.log(`DB CONNECTED`);
    })();



//unnamed iife

    ( () => {
        console.log(`DB CONNECTED TWO ${name}`);
    } )()



//iife with parameters

    ( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    } )('hitesh')


    
//two iife simulatneously 

    //--> ; semicolon is must
    (function chai(){
        // named IIFE
        console.log(`DB CONNECTED`);
    })();

    ( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    } )('hitesh')
