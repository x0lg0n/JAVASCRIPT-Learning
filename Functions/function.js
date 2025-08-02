const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter a number: "));

// function
function onePlusAverage(a, b) {
    return 1 + (a + b)/2;
}

// arrow function
const sum = (a,b)=>{
    return a+b
}

console.log(onePlusAverage(a, b));
console.log(sum(a,b));

