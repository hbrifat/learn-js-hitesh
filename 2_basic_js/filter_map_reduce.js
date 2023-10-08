// filter(), create 'shallow' copy [i.e. array with same reference]


const myNumber = [23, 7, 2, 4, 0, 34, 100]

const newNumber = myNumber.filter( (num) => {
        return num >= 23
})

console.log("New Number:::", newNumber);
console.log("My Number:::", myNumber);




// implicit return

const newNum = myNumber.filter( (num) => num >= 23 )

console.log("Number array:", newNumber);
console.log("Number array:", newNum);


const anotherNums = [];

myNumber.forEach( (num) => {
    if(num >= 23) {
        anotherNums.push(num)
    }
})

console.log("Another num arr::", anotherNums);


// array of books to filter







// map() method create new array

const arrOfNumbers = [23, 6, 34, 98, 56, 46]

const newArr = arrOfNumbers.map( (item) => item * 20)

console.log(newArr);