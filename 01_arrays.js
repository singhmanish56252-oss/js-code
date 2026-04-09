//array

const myArr = [1, 2, 4, 6, 7, 9]
const myHeros = ["Irin Man", "Captain America"]

const myArr2 = new Array(1, 2, 3, 4,)
// console.log(myArr[0])
// console.log(myArr2[2]);

// //array methods
// myArr.push(6)

// // myArr.push(7)
// myArr.unshift(9)
// myArr.shift()

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr.indexOf(4));
// console.log(myArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myn1);


const myn2 = myArr.splice(1, 3)

console.log("C", myArr);

console.log(myn2);
