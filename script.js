'use strict';

// Define The Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Define the Tries Score
let score = 20;

// Define the High Score
let highScore = 0;

// Function To Get QuerySelector
function docQuery(selector, text) {
  document.querySelector(`.${selector}`).textContent = text;
}

// Function To Check if the Guess is Low or High
function checkHighAndLowNumber(message) {
  if (score > 1) {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You Lost :(';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
  }
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  if (guess === '') {
    docQuery('message', 'No Number!');
    return;
  }
  //   Converting the Input to Number
  const guessNumber = Number(guess);
  //   Checking if there is not a value
  if (guessNumber === secretNumber) {
    docQuery('message', 'Correct Answer!');
    document.querySelector('body').style.backgroundColor = 'green';
    docQuery('number', secretNumber);
    if (score > highScore) {
      highScore = score;
      docQuery('highscore', highScore);
    }
  } else if (guessNumber !== secretNumber) {
    guessNumber > secretNumber
      ? checkHighAndLowNumber('High')
      : checkHighAndLowNumber('Low');
  }
});

// Handling Reset Button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  docQuery('message', 'Start Guessing...!');
  docQuery('number', `?`);
  docQuery('score', score);
  docQuery('guess', '');
  document.querySelector('body').style.backgroundColor = '#222';
});
