const prompt = require("prompt-sync")();

// Problem Set - Chapter - 5

// Question - 1
let arr = [1, 8, 5, 7, 6, 34, 67, 50, 10, 80];

let n = parseInt(prompt("Enter a number: "));

arr.push(n);
console.log(arr);

// Question - 2
do {
  n = parseInt(prompt("Enter a number: "));
  arr.push(n);
} while (n != 0);

console.log(arr);

// Question - 3

const a = arr.filter((element) => {
  return element % 10 == 0;
});
console.log(a);

// Question - 4
const square = arr.map((element) => {
  return Math.pow(element, 2);
});
console.log(square);


// Question - 5
let natural = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = natural.reduce((a, b) => {
  return a * b;
});

console.log(b);