function User(name) {
  // this = {} (implicitly)

  // add properties in this
  this.name = name;
  this.isAdmin = false;
  // return this (implicitly)
}

let user = new User("John");

console.log(user);


/* Optional chaining
  The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

  In other words, value?.prop:
    - works as value.prop, if value exists,
    - otherwise (when value is undefined/null) it returns undefined. 
*/

let admin = {};
 
// error
admin.name.address;

// underfined
admin?.name?.address;