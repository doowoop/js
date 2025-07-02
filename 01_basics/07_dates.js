let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // Month 0-11: Jan-Dec
// console.log(myCreatedDate.toLocaleString());

// let myNewDate = new Date("2023-07-02") // ddmmyyyy starts from 1-12
// console.log(myNewDate);

let anotherDate = new Date("01-14-2023")
// console.log(anotherDate);

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(anotherDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()}`

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))