//datatypes are divided based on How they're stored in memory and accessed from memory
//premitive (call by value type), non-primitive (reference type)

// string, number, boolean, null, undefined, symbol, bigint

// array, function, objects


const bigNumber = 45678923458798765n;

console.log(bigNumber);
console.log(typeof bigNumber);

const todayTemp = null;
console.log(typeof todayTemp);

let number;
console.log(typeof number);

let valueIs = Symbol('123');
console.log(valueIs);
console.log(typeof valueIs);

let fictionArray = ["marvel", "DC comic"]
console.log(fictionArray);
console.log(typeof fictionArray);

let myObject = {
    name: "Rifat",
    age: 29
}

console.log(myObject);
console.log(typeof myObject);

const myFunction= function(){
    console.log("hello!");
}

console.log(myFunction);
console.log(typeof myFunction);


