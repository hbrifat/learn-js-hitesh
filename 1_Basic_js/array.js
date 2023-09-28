// array object: store a collection of multiple items under a single variable name
// js arrays are resizable & can contain a mix of different datatypes
// js arrays are zero-indexed
// js array-copy operations create shallow copies (i.e share the same references)




// const myArray1 = [1, 4, 7, 9, 3, 5]
// console.log("myArray1:: " + myArray1);
// console.log(typeof myArray1);

// console.log(" ");

// const myArray2 = new Array(5, 2, 8, 6, 3)
// console.log("myArray2:: " + myArray2);
// console.log(typeof myArray2);

// console.log(" ");

// console.log(myArray1.toString()); // converting array into string
// console.log(typeof (myArray1.toString()));

// console.log(" ");

// //slice & splice

// console.log("slice:: ");
// console.log(myArray1.slice(2,4));
// console.log(myArray1);

// console.log("splice:: ");
// console.log(myArray1.splice(2,3));
// console.log(myArray1);


//push, pop, unshift, shift, indexof, includes, 

const newArray = [10, 15, 20, 25]
console.log(newArray);
newArray.push(26, 45, 80)
console.log(newArray);
newArray.pop()
console.log(newArray);

newArray.unshift(50, 60)
console.log(newArray);
newArray.pop()

newArray.shift()
console.log(newArray);

console.log(newArray.includes(15));
console.log(newArray.indexOf(15));






