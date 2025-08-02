const name = "Sachin";
console.log("My name is " + name + " and my length is " + name.length);
console.log(name.length);

// Template literals
console.log(`My name is ${name} and my length is ${name.length}`);


// Escape Sequence Characters
let fruit = 'Bana\'na';
console.log(fruit); 

fruit = "Bana\"na";
console.log(fruit); 

fruit = "Bana\\na";
console.log(fruit);

fruit = "Bana\na";
console.log(fruit);

fruit = "Bana\rna";
console.log(fruit);


// String Methods   
console.log(name[1]);
console.log(name.length);
console.log(name.substring(0,3));
console.log(name.slice(-5,-1));
console.log(name.replace('S','P'));
console.log(name.concat(" ", "is a good boy."));
console.log(name.trim());
console.log(name.split(""));
console.log(name.endsWith('n'));
console.log(name.includes('ch'));
console.log(name.startsWith('Sa'));
console.log(name.charAt(0));
console.log(name.indexOf('h'));
console.log(name.lastIndexOf('a'));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2, 4));
