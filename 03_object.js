// singleton
// Object.create

const { json } = require("express")

const mySym = Symbol("keys1")

//object literals
const JsUser = {
    name: "Manish",
    age: 20,
    location: "indore",
    email: 'manish@example.com',
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "keys1"
}

// console.log(JsUser.email)
// console.log(JsUser["name"])
// console.log(typeof JsUser[mySym])
// JsUser.email = "manish@1212gmail.com",
// //Object.freeze(JsUser)
// JsUser.email = "Manish8982@email.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");

}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());