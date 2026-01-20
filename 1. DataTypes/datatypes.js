// nn bb ss u

// Primitive Data Types
let a = null; // null type
let b = 123;  // number type
let c = true; // boolean type
let d = BigInt("567") + BigInt("3"); // bigInt type
let e = "String";  // string type
let f = Symbol("I am a symbol");  // symbol type
let g; // undefined type

console.log(a, b, c, d, e, f, g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h);

// Non primitive data types

let item = {  // object type
    "Ram" : true,
    "Sita": false,
    "Laxman": 456,
    "Shyam": undefined
}


console.log(item);
console.log(item["Ram"],item["Sita"]);

