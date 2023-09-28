let myNewDate = new Date()
console.log(`Date object ${myNewDate}`); 
console.log(`Date object with toDateString(): ${myNewDate.toDateString()}`); 
console.log(`Date object with toISOString(): ${myNewDate.toISOString()}`); 
console.log(`Date object with toLocaleDateString(): ${myNewDate.toLocaleDateString()}`); 
console.log(`Date object with toLocaleString(): ${myNewDate.toLocaleString()}`); 
console.log(`Date object with toLocaleTimeString(): ${myNewDate.toLocaleTimeString()}`); 
console.log(`Date object with toString(): ${myNewDate.toString()}`);
console.log(`Date object with toTimeString(): ${myNewDate.toTimeString()}`);  
console.log(`Date object with toUTCString(): ${myNewDate.toUTCString()}`);


//


console.log("Using another method:: " + myNewDate.toLocaleString('Dafault', {
    weekday: "long"
}));

console.log('Using another method:: ' + myNewDate.toLocaleString('Default', {
    month: "2-digit",
    era: "long"
}));