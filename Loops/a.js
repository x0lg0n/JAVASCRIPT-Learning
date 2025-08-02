const prompt = require('prompt-sync')();

const n = prompt("Enter a number: ");
console.log(`Printing numbers from 1 to ${n}:`);

for (let i = 1; i <= n; i++) {
  console.log(i);
}
