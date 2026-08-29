let a = 100000000;
let b = 10_00_000;


let c = 1e9;
console.log( c === 1000000000 );

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000;

let mcs = 1e-6; 
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times


let x = 0b11111111; // binary form of 255
let y = 0o377; // octal form of 255

console.log( x == y ); // true, the same number 255 at both sides

// toString(base)
// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111


123456..toString();
console.log(1e500);