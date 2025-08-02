// Practice set - Chapter 4

// Question 1
let a = "har\"";
console.log(a.length);

// Question 2
console.log(a.startsWith("ha"));
console.log(a.includes("h"))
console.log(a.endsWith("r", "rry"));

// Question 3

let str = "Please give Rs 1000"

const toLower = () => {
    console.log(str.toLowerCase());
}

toLower();

// Question 4
let amount = Number.parseInt(str.slice(15));
console.log(amount);

// Question 5
// replacr 4th character of str
str[3] = '$';
console.log(str); // it will not replace the string because strings are immutable in js.
console.log(str.replace("Rs", "$"))