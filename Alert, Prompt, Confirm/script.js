const prompt = require('prompt-sync');
alert("Hello World!");
prompt("What is your name?");
confirm("Are you sure?");


var age = prompt("How old are you?");
alert(age);

var answer = confirm("Are you sure?");
if(answer){
    alert("You clicked OK!");
} else {
    alert("You clicked Cancel!");
}