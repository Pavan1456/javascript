const myarr = [11,2,3,5,6,8,9,true,"pavan"];
console.log(myarr[0]);
let arr = new Array(2,3,5,96,7,8,6);
console.log(arr);
arr[0]= "poahd";
console.log(arr);


arr.push(20);
arr.pop();

console.log(arr);

console.log(arr.slice(0,4));
console.log(arr.splice(1,3));
console.log(arr+myarr);
let newarr = arr.concat(myarr);
console.log(newarr);

newarr = [...arr,...myarr];
console.log(newarr);
// from
// of
//isArray




