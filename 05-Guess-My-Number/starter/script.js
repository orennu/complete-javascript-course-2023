'use strict';

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

const setElementText = function (selector, text) {
  document.querySelector(selector).textContent = text;
};

const setElementStyle = function (selector, styleProp, styleValue) {
  document.querySelector(selector).style[styleProp] = styleValue;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  // when no input
  if (guess.length === 0) {
    setElementText('.message', '⛔ No number!');

    // when input is out of range
  } else if (Number(guess) <= 0 || Number(guess) > 20) {
    setElementText('.message', '🚫 Number out of range!');

    // when player wins
  } else if (Number(guess) === secretNumber) {
    setElementText('.message', '🎉 Correct Number!');
    setElementText('.number', secretNumber);
    setElementStyle('body', 'backgroundColor', '#60b347');
    setElementStyle('.number', 'width', '30rem');

    if (score > highScore) {
      highScore = score;
      setElementText('.highscore', highScore);
    }

    // when guess is too high or too low
  } else {
    if (score > 1) {
      setElementText(
        '.message',
        Number(guess) > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!'
      );
      score--;
      setElementText('.score', score);

      // when player lose
    } else {
      setElementText('.message', '💣 You lost the game!');
      setElementText('.score', 0);
      setElementStyle('body', 'backgroundColor', '#e3392b');
    }
  }
});

document.querySelector('.btn.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();

  setElementText('.score', score);
  setElementText('.number', '?');
  setElementText('.message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  setElementStyle('body', 'backgroundColor', '#222');
  setElementStyle('.number', 'width', '15rem');
});
