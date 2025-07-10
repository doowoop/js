const user = {
    username: "utsav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "utsav"
//     console.log(this.username); // this.username only works in objects not in functions
// }

// const chai = funtion() {
//     let username = "utsav"
//     console.log(this); 
// }

// const chai = () => {
//     let username = "utsav"
//     console.log(this); 
// }

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) => (num1 + num2) // Curly braces => return keyword, if parenthesis and songle line no return keyword implicit return

const addTwo = (num1, num2) => ({username: "utsav"}) // Curly Braces used when object is used in parenthesis

console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5]

// myArray.forEach()

