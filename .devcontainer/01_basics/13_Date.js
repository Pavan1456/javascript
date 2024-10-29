let mydate = new Date();
console.log(mydate);

console.log(mydate.toString());

console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());

const mycreateddate = new Date(2005,6,18); //months starts from 0
console.log(mycreateddate);
console.log(mycreateddate.toDateString());

let mytime = Date.now();
console.log(mytime);
console.log(mycreateddate.getTime());



let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
