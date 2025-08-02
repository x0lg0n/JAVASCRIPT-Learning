const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
let i = 0;

// while loop
while (i < n) {
    console.log(i + 1);
    i++;
}

// do while loop
do {
    console.log(i + 1);
    i++;
} while (i < n);    