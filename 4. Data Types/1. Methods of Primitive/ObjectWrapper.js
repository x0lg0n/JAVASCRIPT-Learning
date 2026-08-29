// There are 7 primitive types: 
// string, number, bigint, boolean, symbol, null and undefined.

/*
    Object Wrappers:
    String, Number, Boolean, Symbol and BigInt
*/

let str = "hello";
console.log(str.toUpperCase());

let num = Number("123");
console.log(num);

let zero = new Number(0);
if (zero){
    console.log("True");
}
