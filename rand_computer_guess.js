// Computer chooses a random number from 1 10,000. Computer then tries to guess that number and counts how many guesses it makes until it is correct.

var upper = 10000; // variable to define the upper limit of the  random number
var randomNumber = getRandomnumber(upper); // number the computer has to guess, generates a number from 1 - 10000
var guess; // variable to hold the computer's guess
var attempts = 0; // variable to hold the number of attempts

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) +1;
}

while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attempts += 1; // keeps track of the number of guesses
}
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " get it right.</p>");
