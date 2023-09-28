const number = 300;
console.log(number);

const newNumber = new Number(400.56595);
console.log(newNumber);
console.log(newNumber.toString());
console.log(newNumber.toFixed(2));
console.log(newNumber.toPrecision(3));


const number2 = 4000000000;
console.log(number2.toLocaleString('en-IN'));


// Math-----------------------


console.log(Math)
console.log(Math.abs(-456));
console.log(Math.round(-456.556));
console.log(Math.floor(45.678));
console.log(Math.ceil(45.2));


// console.log((Math.round(Math.random()*10)+1));

const myRandomNumber = (Math.random()*100)+1;

console.log(Math.round(myRandomNumber));

// limit on min, max number

const minimumNumber = 20;
const maximumNumber = 30;

console.log(Math.ceil(Math.random() * (maximumNumber-minimumNumber+1))+minimumNumber);


const min = 50, max = 70
console.log(Math.floor(Math.random()*(max-min+1)+min));


