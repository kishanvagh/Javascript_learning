let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   //object

// let myCreatedDate=new Date(2023, 0, 23) //23rd  january 2023 (MONTH INDEX IS STARTING FROM ZERO IN DATE())
// console.log(myCreatedDate)
// let myCreatedDate = new Date(2023, 0, 23, 10, 12)  //23rd january 2020 with time 10:12 AM
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("01-14-2023") //14 january 2023 (mm-dd-yyyy)
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp)   //print current time in miliseconds;

// console.log(myCreatedDate.getTime())  //this is time in millisecond of our declered date,now we can comapre this with current time

let newDate = new Date()
console.log(newDate.toLocaleString('en-In'));   //dd/mm/yy
console.log(newDate.getMonth() + 1);  //(it gives zero based indexing month like 0 for january etc..)
console.log(newDate.getDay());