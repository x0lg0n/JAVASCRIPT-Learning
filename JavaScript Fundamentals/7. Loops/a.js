const prompt = require('prompt-sync')();

const n = prompt("Enter a number: ");
console.log(`Printing numbers from 1 to ${n}:`);
outer:

for (let i = 1; i <= n; i++) {
  inner:
  for (let j = 1; j <= n; j++) {
    if (i === 5 && j === 5) {
      break outer; // Exit both loops when i and j are both 5
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
