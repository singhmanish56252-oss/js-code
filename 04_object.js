// const tinderUser = ()

const tinderUser ={}
tinderUser.name = "sam",
tinderUser.id = "abs123",
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fisrtname: "Manish",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "another@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));