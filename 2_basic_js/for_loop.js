// Number Table

// for (let i = 1; i <= 10; i++) {
//     console.log(`\n This is the table of ${i} \n`);
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);    
//     }
// }


for (let index = 0; index < 20; index++) {

    if (index == 5) {
        // console.log(`5 is detected!!`);
        break
    }
    // console.log(`The value is:: ${index}`);
    
}


// for of loop

let myArrayNew = ["AbuBakar", "Umar", "Usman", "Ali", "(radiyallhu_anhuma)"]

for (const index of myArrayNew) {
    // console.log(index);
    // console.log(myArrayNew);
}

let myStringNew = "Muhammad"

for (const eachWord of myStringNew ) {
    // console.log(eachWord);
}


// maps

const myNewMaps = new Map();

myNewMaps.set('name', 'hb rifat')
myNewMaps.set('age', '28')
myNewMaps.set('email', 'hbrifat@gmail.com')


console.log(myNewMaps);
console.log(myNewMaps.get('email'));
console.log(myNewMaps.get('age'));
console.log(myNewMaps.get('name'));

console.log(myNewMaps.size);
myNewMaps.delete('age');
console.log(myNewMaps.size);



for (const [keys, val] of myNewMaps) {
    console.log(keys, "=>", val);
}

// by default, js object is not iterable, So, 'for_of' loop can't work in js object
// then, we can use 'for_in' loop.

// For in - loop

const myNewObject = {
    name: 'hb rifat',
    age: 28,
    email: 'hbrifat@gmail.com',
    address: 'east badda'
}

for (const keys in myNewObject) {
    console.log(myNewObject[keys], "<=", keys);
}



myArrayNew = ["AbuBakar", "Umar", "Usman", "Ali", "(radiyallhu_anhuma)"]

for (const index in myArrayNew) {
    console.log(myArrayNew[index]);  // in 'For of' => we use only "index/iterator" to get values!!!
}


