let arr = [1,2,3, null];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);

//for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//while loop
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

arr[4] = "Hello";
arr[0] = undefined;
arr[arr.length-1];

console.log(arr);

// Array Methods
arr.push(4); //add element at the end of array
console.log(arr);
arr.pop(); //remove last element from array
console.log(arr);
arr.unshift("Hi"); // add element in starting of array
console.log(arr);
arr.shift(); // remove first element from array
console.log(arr);
delete arr[5]; // delete element from array
console.log(arr);
console.log(arr.indexOf(null)); // find index of an element
console.log(arr.includes(undefined)); // check if element is present or not
console.log(Array.isArray(arr)); //check if it's a array or not
console.log(typeof arr); //check type of variable
console.log(arr.join()); // convert array to string
console.log(arr.reverse()); // reverse array

let compare = (a,b)=>{
    return b-a;
}
console.log(arr.sort(compare)); //sort array
console.log(arr.sort()); // sort array
console.log(arr)