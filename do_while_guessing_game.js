var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?'); // Collect players guess
  guessCount += 1; // increases guess counter by 1
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  } // check to see if the answer is correct, parseInt method used to turn the string from the prompt method into a number
} while ( ! correctGuess )
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber):
