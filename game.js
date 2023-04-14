'use strict';

const goal = 5;
let round = 0;

const playOptions = ['Rock', 'Paper', 'Scissors'];
const getRandomInt = n => Math.floor(Math.random() * n);
// -> 0 ... n - 1
const getComputerChoice = () => playOptions[getRandomInt(playOptions.length)];

function updateScore(winner) {
  let score = ++document.querySelector(`#${winner}`).value;
  if (score == goal) {
    buttons.forEach(button => button.removeEventListener('click', playRound));
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.winner').textContent =
      `Winner - ${winner.toUpperCase()}!`;
  }
}

const result = document.querySelector('.result');
function appendRoundResult(text) {
  let para = document.createElement('p');
  para.textContent = text;
  result.appendChild(para);
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return `It's a draw. Both choose ${playerSelection}`

  if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper'
  ) {
    updateScore('player');
    return `You Won! ${playerSelection} beats ${computerSelection}`
  }

  updateScore('pc');
  return `You Lose! ${computerSelection} beats ${playerSelection}`
}

function playRound() {
  let playerChoice = this.dataset.key;
  let pcChoice = getComputerChoice();

  appendRoundResult(`Round ${++round}: ${getResult(playerChoice, pcChoice)}`);
}

const buttons = document.querySelectorAll('.choice button');
buttons.forEach(button => button.addEventListener('click', playRound));