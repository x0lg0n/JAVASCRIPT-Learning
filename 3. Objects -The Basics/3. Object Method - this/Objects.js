let user = {
    name : "John",
    age : 30
}

function sayHi() { // Methods
    console.log("Hello " + this.name);
}
user.sayHi = sayHi;
user.sayHi();

admin = {
    name : "admin",
    // Methods
    greet() {
        console.log("Good Morning!");
    }
};
admin.sayHi = sayHi;
admin.sayHi();
console.log(user);
console.log(admin);