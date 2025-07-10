function sayMyName(){
    console.log("U");
console.log("T");
console.log("S");
console.log("A");
console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // Parameter
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ // Parameter
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5) // Argument (3, "4"), (3, "a"), (3, null)

// console.log("Result: ", result);

function loginUserMessage(username = "utsav"){
    if(!username){ // username == undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("utsav")) // If: loginUserMessage() w no arg is passed => undefined just logged in
// console.log(loginUserMessage())

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500)); // Output 200 only

// function calculateCartPrice(...num1){ // Rest Operator converst multiple values into array also has same syntax as Spread so dont confuse
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ // Leaves index 0, 1,...
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "utsav",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "utsav",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));