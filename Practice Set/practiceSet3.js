const prompt = require('prompt-sync')();

// Practice set - Chapter - 3
// Question - 1

let ram = {
    Math: 45,
    Science : 56,
    English : 56,
    Hindi : 45,
    Computer : 45
}

let sum = 0;

for (let i = 0; i < Object.keys(ram).length; i++) {
    sum += ram[Object.keys(ram)[i]];
}

console.log(sum);


// Question - 2
for(let i in ram){
    sum += ram[i];
}

console.log(sum);

// Question - 3
let cn = 9;
let i;
while(i != cn){
    i = parseInt(prompt("Enter a number"));
    if(i == cn){
        console.log("Congratulations");
    }else{
        console.log("Try again!");
    }
    
}

// Question - 4 
const mean = (a, b , c) =>{
    return a+b+c/3;
}

console.log(mean(ram.Math,ram.Science,ram.English));