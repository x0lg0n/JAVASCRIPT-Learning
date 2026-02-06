let sum = (a, b) => a + b;

console.log(sum(5, 10));

const checkAge = (age) => {
    if (age > 0) {
        console.log("This is valid age");
    } else {
        console.log("This is not a valid age");
    }
}

checkAge(23);

let age = parseInt(prompt("What is your age?"));

const message = age < 18 ? 
    () => console.log("You cannot vote") :
    () => console.log("You can vote");

message();