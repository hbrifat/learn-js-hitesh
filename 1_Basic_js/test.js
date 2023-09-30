// console.log("learning js from hitesh hindi")

// var accountName = "userName"
// let accountUser = "myUser"
// const piValue = '3.1416'

// accountAddress = "bd"

// let accountState

// console.table([accountName, piValue, accountAddress, accountState, accountUser])



// //alert("hello!") // it's node; not browser!


// let isLogggedIn = " R"
// let isLogggedInToBool = Boolean(isLogggedIn)
// console.log(isLogggedIn, isLogggedInToBool)
// console.log(isLogggedIn)
// console.log(isLogggedInToBool);
// console.log(typeof isLogggedInToBool);


// let number = 43
// let numberToString = String(number)

// console.log(numberToString);
// console.log(typeof numberToString);
// console.log(typeof number);
// console.log(number);

// let num = "1" + 2 + 2;
// console.log(num);
// console.log(typeof num);
// let num1 = 1 + 2 + "2";
// console.log(num1);
// console.log(typeof num1);


// let num3 = 100
// console.log(num3++);
// console.log(num3);


// let num4 = 100
// num4++;
// console.log(num4);

// let num5 = 100;
// let num6 = num5++;
// console.log(num5);
// console.log(num6);


// const bigIntDemo = 475879658745789n;

// console.log(bigIntDemo);
// console.log(typeof bigIntDemo);


// const myName = "rifat"
// const yourName = " don't know!"

// console.log(`My name is ${myName} & your name is ${yourName}`);
// console.log(`${myName}${yourName}`);


// const newName = new String("Rifat")
// console.log(typeof newName);

// let newString = "https://www.hiteshMia.com/%20choudhary%website"
// console.log(newString.split("%"));
// console.log(newString);


// let myNumber = 1200
// console.log(myNumber);

// let myNumberNew = new Number("1200")
// console.log(myNumberNew);
// console.log(myNumberNew.length);
// console.log(typeof myNumberNew);
// console.log(myNumberNew.toString);
// console.log(myNumberNew.toString.length);



console.log(Math.floor((Math.random()*10)+1));


let minValue = 150
let maxValue = 180

console.log(Math.floor(Math.random() * (maxValue-minValue+1) + minValue));




// Date with new keyword

let newDate = new Date();
console.log(newDate);
console.log(newDate.getTime());  // in milisecond, help in comparison
console.log(newDate.toDateString());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));

// Date with fixed date

let myCreatedDate = Date(2023, 8, 30)
console.log(myCreatedDate);

let myCreatedDateTwo = new Date("09-30-2023")
console.log(myCreatedDateTwo);
console.log(myCreatedDateTwo.getTime());


let dateNow = Date.now()
console.log(dateNow);



