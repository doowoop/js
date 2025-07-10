// {} // Scope of that program be it function if else etc

// var c = 300

let a = 300

// if (true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a)
// }

//  console.log(a); // results in error
// console.log(b); // results in error
// console.log(c); // results 30

function one(){
    const username =  "utsav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error
    // two() // if not written function fails   
}
// one()

if (true){
    const username = "utsav"
    if (username === "utsav"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log((website));
    
}
// console.log(username);

// ++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}

addTwo(5)

const addTwo = function(num){
    return num + 2
}
