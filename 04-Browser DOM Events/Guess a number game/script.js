'use strict';

/*(document.querySelector('.message');
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'My stupid text';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

/*
//Doesn't work. Why?
function OnClick() {
  console.log(document.querySelector('.guess').value);
}
document.querySelector('.check').addEventListener('click', OnClick);
*/

function newSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = newSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = newSecretNumber();
  score = 20;
  setScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    score = score > 0 ? --score : 0;
    if (score === 0) {
      displayMessage('You lost the game!');
    } else {
      displayMessage(
        guess < secretNumber ? 'To low number!' : 'To high number!'
      );
    }
    setScore(score);
  }
});
