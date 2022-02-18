'use strict';

//Selecting DOM elements
const score0El = document.querySelector('#score--0'); //by Id
const score1El = document.getElementById('score--1'); //by Id
const currentS0El = document.getElementById('current--0');
const currentS1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice'); //by class
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let player0Score = 0;
let player1Score = 0;
let player0Current = 0;
let player1Current = 0;
let activePlayer = 0;
let playing = true;

const player0 = {
  score: 0,
  current: 0,
  scoreEl: score0El,
  currentEl: currentS0El,
  wholeEl: player0El,
};

const player1 = {
  score: 0,
  current: 0,
  scoreEl: score1El,
  currentEl: currentS1El,
  wholeEl: player1El,
};

function resetPlayer(player, active) {
  console.log(player);
  player.score = 0;
  player.current = 0;
  player.scoreEl.textContent = 0;
  player.currentEl.textContent = 0;
  if (active) {
    player.wholeEl.classList.add('player--active');
  }
  player.wholeEl.classList.remove('player--winner');
}

function newGame() {
  console.log('sdfghjkl;');
  playing = true;
  resetPlayer(player0, true);
  resetPlayer(player1, false);
  activePlayer = 0;
  diceEl.classList.add('hidden');
}

newGame();

function addToCurrentScore(player, number) {
  player.current += number;
  player.currentEl.textContent = player.current;
}

function resetCurrentScore(player) {
  player.current = 0;
  player.currentEl.textContent = 0;
}

function activatePlayer(player) {
  player.wholeEl.classList.add('player--active');
}

function deactivatePlayer(player) {
  player.wholeEl.classList.remove('player--active');
}

function setAsWinner(player) {
  player.wholeEl.classList.add('player--winner');
}

function changeActivePlayer() {
  activePlayer = (activePlayer + 1) % 2;
}

//Give some better name.
//Function holds turn from 1 player and give to another
function switchTurnBetween(activePlayer, holdedPlayer) {
  activePlayer.score += activePlayer.current;
  if (activePlayer.score >= 100) {
    setAsWinner(activePlayer);
    diceEl.classList.add('hidden');
    playing = false;
  }
  activePlayer.current = 0;
  activePlayer.scoreEl.textContent = activePlayer.score;
  activePlayer.currentEl.textContent = 0;
  activatePlayer(holdedPlayer);
  deactivatePlayer(activePlayer);
}

const rollDice = function () {
  if (!playing) return;
  let number = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${number}.png`;
  diceEl.classList.remove('hidden');
  if (number !== 1) {
    activePlayer === 0
      ? addToCurrentScore(player0, number)
      : addToCurrentScore(player1, number);
  } else {
    activePlayer === 0
      ? resetCurrentScore(player0)
      : resetCurrentScore(player1);

    changeActivePlayer();
    if (activePlayer === 0) {
      activatePlayer(player0);
      deactivatePlayer(player1);
    } else {
      activatePlayer(player1);
      deactivatePlayer(player0);
    }
  }
};

const hold = () => {
  if (!playing) return;
  activePlayer === 0
    ? switchTurnBetween(player0, player1)
    : switchTurnBetween(player1, player0);
  changeActivePlayer();
};

newBtn.addEventListener('click', newGame);
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
