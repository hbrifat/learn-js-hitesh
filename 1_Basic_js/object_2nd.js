const obj1 = {
    a: "1",
    b: "2",
}
const obj2 = {
    c: "3",
    d: "2",
}
const obj3 = {
    e: "3",
    f: "2",
}

const obj10 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj10);
// console.log(typeof obj10);

const objThread = {...obj1, ...obj2,...obj3, ...obj10}
// console.log(objThread);

const arrayOfObject = [
    firstObj = {
        name: "myName1",
        email: "me1@example.com",
        id: 101
    },

    secondObj = {
        name: "myName2",
        email: "me2@example.com",
        id: 102
    },

    thirdObj = {
        name: "myName3",
        email: "me3@example.com",
        id: 103
    },

    fourthObj = {
        name: "myName4",
        email: "me4@example.com",
        id: 104
    }
]

// console.log(arrayOfObject);

arrayOfObject[0].email = "hbrifat@gmail.com"
// console.log(arrayOfObject);


const tinderUser = {
    name: "userName",
    id: 1023,
    email: "myemail@example.com",
    isLoggedIn: true,
    logHistory: ["friday", "sunday", "monday"],
}

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLogged"));


// object de-Structure

const {logHistory} = tinderUser
console.log(logHistory);

const {logHistory: logH} = tinderUser //sel-defined name
console.log(logH);


