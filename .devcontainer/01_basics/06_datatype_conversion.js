let score = "33";
 console.log(typeof(score));

let converted = Number(score);
console.log(typeof(converted));

let s = "33abc";
console.log(typeof(s));
let converts = Number(s);
console.log(typeof(converts));
console.log(converts);

let so = undefined;
console.log(typeof(so));
let convert = Number(so);
console.log(typeof(convert));
console.log(convert);

//operations
let val = 3;
let value = -val;
console.log(value);

//string operartions
let str1 = "djhd";
let str2 = " fjhfdhu";
console.log(str1+str2);


//tricky
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3+4)*5/2);

//different conversions
console.log(+true); //o/p = 1
// console.log(true-)//error
console.log(+""); //o/p = 0

let game =100;
console.log(++game);
console.log(game--);
console.log(--game);
console.log(game++);



