// singleton

//object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Utsav",
    "full name": "Utsav Patiyat",
    [mySym]: "mykey1",
    age: 21,
    location: "Pune",
    email: "utsav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser."full name"); //syntax not allowed therefore use [""] syntax if something is declared in strings in an object
// console.log(JsUser["full name"]);
// console.log(typeof JsUser["mySym"]);

JsUser.email = "utsav@yt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@in.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // String interpolation
}

// console.log(JsUser.greetingTwo());

const tinderUser = new Object() // Since it is an empty object, same as: const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "utsav",
            lastname: "patiyat"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // returns modified target object

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 2,
        email: "j@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(Object.keys(tinderUser)); // impppp converts into array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js",
    price: "999",
    teacher: "hitesh"
}

// course.teacher

const {teacher: t} = course // curly braces means destructuring

console.log(t);

// {
//     name: "utsav",
//     coursename: "js",
//     price: "free"
// }

