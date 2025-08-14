// if

const isUserloggedIn = true
const temperature = 41

// if (temperature === 41){
//     console.log("less than 50");
// } 
// else{
//     console.log("Temp is greater than 50");
// }

// const score = 200

// if(score > 100){
//     let power = "fly"    //Using const or let works only inside the scope and throws error outside scope but with var, executes even out of scope 
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); //Without scope if condition

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allowed to but courses");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
}
