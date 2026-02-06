// object constructor syntax
let user = new Object();

// object literal syntax
let time = {
    hours: 10,
    minutes: undefined, 
    seecond: null,
};
console.log(time === undefined);

let cars = {
    type: "Fiat",
    model: "500",
    color: "white",
};

console.log(cars);
console.log("type" in cars);

// accessing object properties
console.log(cars.type);
console.log(cars["model"]);

delete cars.color;

console.log(cars);

// adding new properties
cars.year = 2020;
console.log(cars);

// nested objects
let emp = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

console.log(emp.address.city);

for (let prop in emp) {
    console.log(prop + ": " + emp[prop]);
}


let key = "model";
console.log(cars[key]);

let bikes = {
    [key]: "new value",
    type: "Yamaha",
}

function display(name, age) {
    return {
        name,
        age: age
    }
}
console.log(display("Alice", 25));