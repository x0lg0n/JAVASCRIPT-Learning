// Higher Order Array Methods


const numbers = [1, 2, 3, 4];


// ForEach Method
numbers.forEach(function (number) {
    console.log(number);
})

// Map Method
const a = numbers.map((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
})

console.log(a);


// Filter Method
let a2 = numbers.filter((value) => {
    if (value % 2 == 0)
        return true;
})
console.log(a2);

// Reduce Method
let sum = numbers.reduce((prevValue, currentValue) => prevValue + currentValue);
console.log(sum);