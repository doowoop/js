// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100.3 no float no int just a number
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId) // false
// const bigNumber = 1234567890987654321n


// const heroes = ["batman", "spidey", "superman"]
/* let myObj = {
    name: "utsav",
    age: 21,
} */

/* const myFunction = function(){
    console.log("Hello World");
} */

// console.log(typeof bigNumber);

// Reference (Non primitive)
// Array, Objects, Functions

// All non primitive datatypes typeof is returned as 'function' whereas function datatype typeof returns as 'object fucntion'

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hitesh"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "usear@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "utsav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



