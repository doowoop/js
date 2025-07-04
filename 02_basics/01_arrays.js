// 02_basics/01_myArray.js

// const { superset } = require("d3")

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeroes = ['batman', 'spidey', 'hulk']

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

// console.log(myn2);

const marvel = ["thor", "ironman", "hulk"]
const dc = ["batman", "robin", "flash"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const supes = marvel.concat(dc)
// console.log(supes);

const new_supes = [...marvel, ...dc]
// console.log(new_supes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Utsav"))
// console.log(Array.from("Utsav"));
// console.log(Array.from({name: "Utsav"}));  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
