let user = {
    name : "John"
}

let admin = user;
admin.type = "human";

console.log(admin);


let a = {};
let b = {};

console.log(a === b);


// Cloning and Merging 
let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

clone.name = "Peter";

console.log(clone);

// Assign Function
Object.assign(clone, user, admin);
console.log(clone);

// Nested Cloning 
let fruits = {
    name : "Grapes",
    type : {
        color: "green",
        quantity: 4,
        ripeed: false
    }
}

let tomato = Object.assign({}, fruits);
console.log(tomato);