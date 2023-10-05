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






