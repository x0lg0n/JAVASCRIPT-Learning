const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number"));

for (let i = 0; i < n; i++) {
    console.log(i + 1);
}

// Sum of first N natural numbers

let sum = 0;
for (let i = 0; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);

// for in loop

let obj = {
    name: "John",
    age: 25,
    city: "New York"
}

for(let key in obj){
    console.log(key,":",obj[key]);
}

// for in loop with array
let arr = [34,67,89];
for(let key in arr){
    console.log(key,":",arr[key]);
}

// for of loop
for(let value of arr){
    console.log(value);
}