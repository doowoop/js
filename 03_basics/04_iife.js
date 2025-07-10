// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})(); //global scope ke variables/declaration ke pollution ko hatane ke liye use IIFE

// to run 2 iife use semicolon ;

( (name) => { //unnamed iife with parameters passed
    console.log(`DB CONNECTED TWO ${name}`);
}) ('utsav')