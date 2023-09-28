// // 'this' keyword refer current context/value
// // On Browser, the Global object is found => Window object...***

// const user = {
//     userName: "hb rifat",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.userName}, is a new user!`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();

// user.userName = "bahalul"

// user.welcomeMessage();

// // console.log(this);               empty


function chai(){
    let userName = "hbR"
    // console.log(this.userName);              // undefined 
    // console.log(this);
    console.log(userName);
}

chai()

const chaiFunc = function(){
    // console.log(this);
    let userName = "hbrifat"
    console.log(userName);
    // console.log(this.userName);              // undefined
}

chaiFunc()
// console.log(typeof chaiFunc);

const chaiNewFunc = () => {
    console.log(this);
    let userName = "hb rif"
    console.log(userName);
    // console.log(this.userName);
}

chaiNewFunc()
// console.log(typeof chaiNewFunc);


const addTwoNum = (num1, num2) => {
    return num1+num2;
}

// implicit return

// const addTwoNumber = (num1, num2) => num1+num2;

// or,

const addTwoNumber = (num1, num2) => (num1+num2) // curl braces need 'return' keyword, parenthesis doesn't! ***

const addSome = (num1, num2) => ({username: "anyName"}) // to return a Object, parenthesis is must!

console.log(addSome(4,3));


