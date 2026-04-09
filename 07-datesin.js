// Dates

 let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toDateString());
//  console.log(typeof myDate);

let myCreatedDate = new Date(2026, 4, 25)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//${newDate.getDay()} and the time


newDate.toLocaleDateString('default',{
    weekday:"long",
})