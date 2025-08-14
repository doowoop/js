// const userEmail = "h@hitesh.ai"

// if(userEmail){
//     console.log("Email");
// } else {
//     console.log("No email");
// }

// falsy values: false, 0, -0, BigImt 0n, "", null, undefined, NaN
// truthy values: true, 1, +0, [], {}, function(){}, "0", 'false'

// const emptyObj = {} //Detect object/array is empty

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// false == 0 is true
// flase == '' is true
// 0 == '' is true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");
;

