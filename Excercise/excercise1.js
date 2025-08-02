// Number guessing game
const prompt = require("prompt-sync")();

// Generate a random number between 1 and 100
let randomNUmber = Math.floor(Math.random() * 100);

// Prompt user to enter their guess
let guess;

// number of attempts allowed
let attempts = 10;

while (attempts > 0 && guess !== randomNUmber) {
  guess = parseInt(prompt("Enter your guess: "));
  if (guess < randomNUmber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNUmber) {
    console.log("Too high! Try again.");
  }

  attempts--;
}
if (guess === randomNUmber) {
  console.log(
    `Congratulations! You guessed the number ${randomNUmber} in ${attempts} attempts.`
  );
} else {
  console.log(
    `Sorry, you've run out of attempts. The correct number was ${randomNUmber}.`
  );
}
