// function sayMyName(){
//     // console.log("Hb Rifat")
//     let myName = "bahalul"
//     return myName
// }

// // sayMyName();

// console.log(sayMyName());

// function addTwoNumbers(num1, num2) {
//     return (num1+num2)
//     console.log("hello!")
// }

// let result = addTwoNumbers(25, 29)
// console.log(result);
// console.log("Result:: ", result);


function returnWithBacktics(userName = "rif"){             // dafault value
    if(!userName) {            // userName === undefined
        console.log("plz, pass a username!!!");
        return;
    }
    return `${userName} is just logged In!`
}

// console.log(returnWithBacktics("hbr"))
console.log(returnWithBacktics()); 





