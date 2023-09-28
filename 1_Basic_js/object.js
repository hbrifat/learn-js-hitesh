// literals method => no singleton,

// constructor method => always singleton; Object.create

const mySymbol = Symbol("key1")

const jsUser = {
    name: "rifat",
    "full name": "hb rifat",
    [mySymbol]: "myNewKey1",    //***important
    age: 29,
    email: "hbrifat@example.com",
    isLoggedIn: true,
    loggedHistrory: ["friday", "monday", "thursday"],
    "greetingsThree": function() {
        console.log("hello, js User!!!");
    }
}



//console.log(jsUser.loggedHistrory);       object access
//console.log(jsUser["loggedHistrory"]);    object access

// console.log(jsUser[mySymbol]);

jsUser.age = 2000
// console.log(jsUser.age);

jsUser[mySymbol] = "anotherKey2"

// Object.freeze(jsUser)
// jsUser.email = "hbrifat@gmail.com"
// console.log(jsUser);


jsUser.greetings = function(){
    console.log("Hello, js user!");
}

console.log();

jsUser.greetings()

jsUser.greetingsTwo = function(){
    console.log(`Hello, js user Mr. ${this.name}`)
}

jsUser.greetingsTwo()

jsUser.greetingsThree()

console.log();








