// primitive data type
//call by value
// number , string , undefined, null,bigInt , symbol , boolean

// call  by reference
// array , object , functions


const id = Symbol("123");
const anotheid = Symbol("123")
console.log(id);
console.log(anotheid);

console.log(id === anotheid)


const bigNUmber = 314114641231645464n;
console.log(bigNUmber);


//array[]
const heros = ["shaktiman","doga","naagraj"];
console.log(heros);

//object{key : value}
const obj = {name:"pabvan",
    age : "18"
}
console.log(obj);

// console.log(heros[2]);

// function()

const myfun = function(){
    console.log("heyyy");
    
}
console.log(myfun);

console.log(typeof(obj));
console.log(typeof(myfun));


 


