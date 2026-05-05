function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
//sayMyName()

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
//console.log(addTwoNumbers(3, 6));


function loginUserMessage(username){
  if(username === undefined){
    console.log("please enter username ");
    return
  }
    return `${username} just loggrd in`
}
//console.log(loginUserMessage("manish"));
//console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(566, 654, 654, 230));

const user = {
    username: "manish",
    price: 999
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user);
handleobject({
    username: "sam",
    price: 199
})

const myNewArray = [55, 52, 25, 44]
function returnSecondValue(getArray){
    return getArray[3]

}
console.log(returnSecondValue(myNewArray));