// nn bb ss u

/* There are total 8 dataTypes : 
    1. Number - Integer and Floting Point Number
                Special Numbers :- Infinity, -Infinity, NaN 
    2. String - Double Quote, Single Quote, Back tick
    3. bigint - for integer numbers of arbitrary length.
    4. Boolean - Logic type, true, false
    5. Null - null value
    6. Undefined - "Value not defined"
    7. Object - Used to store collections of data and more complex entities.
    8. Symbols - Used to create unique identifiers for objects.  
*/ 

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

