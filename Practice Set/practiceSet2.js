// Practice set - Chapter 2
// Question - 1
let age = prompt("Enter your age");
age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
    console.log("You are in the best age");
}
else {
    console.log("Enjoy your life");
}

// Question - 2
switch (age) {
    case 10:
        console.log("Your age is 10");
        break;
    case 20:
        console.log("Your age is 20");
    default:
        console.log("Your age is not special");
}

// Question - 3
let num = prompt("Enter any number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log(`${num} is divisible by both 2 and 3`);
}
else {
    console.log(`${num} is not divisible by both 2 and 3`);
}

// Question - 4
let umar = prompt("Enter your age");
age = Number.parseInt(age);
if (age >= 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

// Question - 5
let num1 = prompt("Enter any number");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0) {
    console.log(`${num1} is even`);
}
else if (num1 % 3 == 0) {
    console.log(`${num1} is odd`);
}
else {
    console.log(`The number ${num1} is neither even nor odd`);
}