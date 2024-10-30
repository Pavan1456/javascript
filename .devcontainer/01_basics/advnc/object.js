// const jsuser = {keys:values};

const mysym = Symbol("key1");
const un ={name:"oa",
    age:18,
    city:"mathura",
    [mysym]:"mykey1",
    mysym2:"mykey2"
}
console.log(un.name);
console.log(un["name"]);
console.log(typeof(un.mysym));
console.log(typeof(un[mysym]));

console.log(typeof(mysym));

un.greeting = function(){
    console.log("heloo how are you");   
}
console.log(un.greeting());

un.gret  = function(){
    console.log(`Heloo hpow are you ${this.mysym}`);
    
}

console.log(un.gret());


console.log(un);

// +++++++++++++++++++++++++++++++++++++++


// singletono bject
const tind = new Object();
//variable ton class
const tinder = {1:2,5:6};

const regularuser = {email:"ufhuhf",
    username:{fisrtname:"pavan",lastname:"agrawal"}
};
console.log(regularuser.username.fisrtname);

const obj3 = Object.assign(tinder,regularuser);
console.log(obj3);

const obj4 = {...tinder,...regularuser}
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));



// =====destructure====
const {email : es} = obj4;
console.log(es);


