const name = "manish"
const repoCount = 20

//console.log(name + repoCount + "Value");
//console.log(`${name}${repoCount}Value`);

//console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Manishs')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));  // for checking value at  5 position
console.log(gameName.indexOf('i'));  // for index

const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = " Manish  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Manish.com/ms%20singh"

console.log(url.replace('%20', '_'))

console.log(url.includes('Manish'))