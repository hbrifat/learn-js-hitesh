const name = "rifat"
const number = 27

console.log(name + number + " anything else! "); // normal way
console.log(typeof name)

console.log(`My name is ${name} and my number is ${number}`); //string interpolation using Backtics ``

const myName = new String('HB Rifat')
console.log(myName)
console.log(typeof myName)
console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf("r"));


const newString = myName.substring(0, 8)
console.log(newString);

const anotherString = myName.slice(4,8)
console.log(anotherString);

const url = "https://hbrifat.com/hb%20rifat"
console.log(url.replace('%20', '-'));

let newUrl = url.split('%20')
console.log(newUrl);


//using Backticks

console.log(`hello, my name on fb is: ${name} and my number is: ${number}`);