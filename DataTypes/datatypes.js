// nn bb ss u

// Primitive Data Types
let a = null;
let b = 123;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "String";
let f = Symbol("I am a symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Non primitive data types

let item = {
    "Ram" : true,
    "Sita": false,
    "Laxman": 456,
    "Shyam": undefined
}

console.log(item);
console.log(item["Ram"],item["Sita"]);

