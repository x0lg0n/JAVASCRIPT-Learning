
const prompt = require('prompt-sync');
let a = prompt("Enter your age");
a = Number.parseInt(a);

if (a > 0) {
    alert("This is valid age");
}
else {
    alert("This is not a valid age");
}
console.log(a);

// if else ladder
if (a < 0) {
    console.log("This is invalid age");
}
else if (a >= 18 && a <= 45) {
    console.log("You are in the best age");
}
else {
    console.log("Enjoy your life");
}

// switch case
switch (a) {
    case 23:
        console.log("Your age is 23");
        break;
    case 26:
        console.log("Your age is 26");
    default:
        console.log("Your age is not special");
}

