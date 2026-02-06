let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");

let currentLine = 0;
function readline() {
  return input[currentLine++];
}


let q = parseInt(readline());  
let b = parseInt(readline());



// Functions:
// Function Declaration
function onePlusAverage(a, b) {
  return 1 + (a + b) / 2;
}

// Function Expression
const onePlusAverages = function (a, b) {
  return 1 + (a + b) / 2;
};

// arrow function
const sum = (a, b) => {
  return a + b;
};

function sayHi() {
  console.log("Hi there!");
}

let func1 = sayHi();

func1();
sayHi();

console.log(onePlusAverage(a, b));
console.log(sum(a, b));
