function addCartAmount(value1, ...amount1){    //rest operator ...
    return amount1
}


console.log(addCartAmount(100, 50, 500, 60, 78));


const user = {
    name: "hb rifat",
    id: 101,
    email: "hbr@gm.com"
}

console.log(user);

function objectPass(anyObject){
    console.log(`The name is ${anyObject.name} & the email is ${anyObject.email}`); 
}

// objectPass(user);

objectPass({
    name: "hb rifat 101",
    email: "hbrifat101@gmail.com"
})


const myArray = [130, 240, 320, 560]

function getArray(anyArray) {
    console.log(anyArray[0], anyArray[1], anyArray[2], anyArray[3]);
}

getArray(myArray)




// 2 type of function declaration

console.log(addTwo(9))

function addTwo(num1){
    return num1+6
}

const addThree = function(num1){
    return num1+4+6;
}

console.log(addThree(5));




