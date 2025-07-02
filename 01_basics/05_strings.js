const name = "utsav"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('utsav-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // non negative values only
console.log(newString);

const anotherString = gameName.slice(-6, 4) // neg and pos both
console.log(anotherString);

const newStringOne = "   Utsav   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://utsav.com/utsav%20patiyat"

console.log(url.replace('%20', '-'))

console.log(url.includes('utsav'))

console.log(gameName.split('-'))