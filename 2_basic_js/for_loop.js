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
// console.log(myNewMaps.get('email'));
// console.log(myNewMaps.get('age'));
// console.log(myNewMaps.get('name'));

// console.log(myNewMaps.size);
myNewMaps.delete('age');
// console.log(myNewMaps.size);



for (const [keys, val] of myNewMaps) {
    console.log(keys, "=>", val);
}

for (const keys in myNewMaps) {
    // console.log(keys);                  // for in - loop doesn't work with 'map'
}

// by default, js object is not iterable, So, 'for_of' loop can't work in js object
// then, we can use 'for_in' loop.

// For in - loop

const myNewObject = {
    name: 'hb rifat',
    age: 28,
    email: 'hbrifat@gmail.com',
    address: 'east badda',
    mycollection: ['pokemon', 'ben10', 'doreamon']
}


for (const keys in myNewObject) {
    console.log(myNewObject[keys], "<=", keys);
}



myArrayNew = ["AbuBakar", "Umar", "Usman", "Ali", "(radiyallhu_anhuma)"]

for (const index in myArrayNew) {
    // console.log(myArrayNew[index]);  // in 'For of' => we use only "index/iterator" to get values!!!
}


//for each loop


myArrayNew.forEach( function(value){             //function has 'no name' !!!
    // console.log(value);
})

//for each with Arrow function

myArrayNew.forEach( (value) => {
    // console.log(value);
})

// another way!

function printMe(value){
    console.log(value);
}

myArrayNew.forEach(printMe);

// more paremeters!!!

myArrayNew.forEach( (value, index, arr) => {
    // console.log(`${value} is located at ${index} & the array is:: ${arr}`);
})



// objects in array *** very important

const myNewArrWithObj = [
    {
        name: "object 1",
        keys: ['name', 'properties', 'position'],
        position: 0
    },
    {
        name: "object 2",
        keys: ['name', 'properties', 'position'],
        position: 1
    },
    {
        name: "object 3",
        keys: ['name', 'properties', 'position'],
        position: 2
    }
]

myNewArrWithObj.forEach( (element) => {
    console.log(element['name'])
    console.log(element['keys'])
    console.log(element['position'])
})



