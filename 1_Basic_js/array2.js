const newArray1 = ["rahim", "karim", "jarina", "sakina"]
const newArray2 = ["spiderMan", "superMan", "batMan", "antMan"]

// newArray1.push(newArray2)
// console.log(newArray1);

// newArray1.unshift(newArray2)
// console.log(newArray1);

// const addedArray = (newArray1.concat(newArray2))
// console.log(addedArray);


// const addingArrayWithSpread = [...newArray1, ...newArray2]
// console.log(addingArrayWithSpread);

// const copyArr = [...addingArrayWithSpread]
// console.log(copyArr);

const complexArr = [1, 2, 3, 4, [5, 6], 7, [8, 9, [5, 4], [2, 6], 8, 9], 3]
console.log(complexArr);

console.log(complexArr.flat(Infinity).sort());
console.log(complexArr.sort());

console.log(typeof Array.isArray("rifat"));
console.log(Array.from("rifat"));

console.log(Array.from({name: "rifat"})); // intersesting; as it couldn't convert object directly

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

