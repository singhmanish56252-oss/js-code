//# Primtive


// 7 types : String ,Number ,Boolean, Null , Undefined, symbol, bigInt


const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//const bigNumber = 8458956585496n



// refernce (non primitive)

//Array , object , functions

const heros = ["saktiman", "thor", "spider"];
let myObj = {
    name: "manish",
    age: 21,
}

const myFuction = function(){
    console.log("hello world");
}

console.log(typeof scoreValue);