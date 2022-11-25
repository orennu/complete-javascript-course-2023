'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let isPlaying, currentScore, activePlayer, totalScores;

// Starting conditions
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  isPlaying = true;
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
};

// functions
const rollDice = () => Math.trunc(Math.random() * 6) + 1;
const switchActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // Roll dice
    const dice = rollDice();

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${dice}.png`);

    // Check rolled dice
    if (dice !== 1) {
      // Add dice to current score and display on current player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Reset current score to 0 and switch active player
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // Add current score to active player's total score
    totalScores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    // Check if player's total score is at least 100, if so finish the game,
    // otherwise switch player
    if (totalScores[activePlayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', init);

init();
