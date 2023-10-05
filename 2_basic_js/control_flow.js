// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let amIpassed = true;


// if(amIpassed) {
//     console.log("Welcome in the company!");
// } else {
//     console.log("Sorry, Try again later!");
// }

// implicit scope

// if(amIpassed) console.log("Welcome in the company"), 
// console.log("Using comma to add multiple line in if statement isn't good parctice!");

// switch (amIpassed) {
//     case true:
//         console.log("Welocome!");
//         break;
//     case null:
//             console.log("Sorry, Next time, plz!");
//             break;
//     default:
//         console.log("Try best always!");
//         break;
// }

// Falsy Values are values which are assumed to be false 
/*
    false, 0, -0, BigInt 0n, ""/'', null, undefined, NaN,
*/


// Truthy Values are values which are assumed to be truth 
/*
    'false'/"false", '0'/"0", "space "/'space', [empty_array], {empty_object}, function(){}
*/

if (function(){console.log("it's a function!");}) {
    console.log("function defination is truthy value!!!");   
}

let bigIntNumber = 34567892345787600n;
console.log("Big Number", bigIntNumber);
console.log(typeof bigIntNumber);


let myNewArray = []

if (myNewArray.length === 0) {
    console.log("Empty Array!");
} else {
    console.log("Array has some values!!!");
}


let mynewObject = {}

console.log(Object.keys(mynewObject).length); // first get the keys in Arrays, then get array length


// nullish coalescing operator

let val1 = 23;
let val2 = undefined;
let result = val1 ?? val2;
console.log("Result::", result);


// conditonal (ternary) operator

let num1 = 10;
let newVal = num1 > 10 ? num1 : 12
console.log("new value::", newVal);







