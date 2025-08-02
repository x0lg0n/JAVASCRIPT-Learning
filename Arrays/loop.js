let arr = [1,5,4,7,9,2,,7,8,5];

// for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// for-in loop
for(let i in arr){
    console.log(arr[i]);
}

// for-of loop
for(let i of arr){
    console.log(i);
}

// forEach loop
arr.forEach(function(element){
    console.log(element*element);
});

// Array.from() method
let name = "Rahul";
let nameArr = Array.from(name);
console.log(nameArr);