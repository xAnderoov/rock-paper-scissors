'use strict';

const playOptions = ['rock', 'paper', 'scissors'];

let getRandomInt = n => Math.floor(Math.random() * n);
// n not included

let getComputerChoice = () => playOptions[getRandomInt(playOptions.length)];

let toCapital = (word) => word[0].toUpperCase() + word.slice(1);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return `draw`
  if (playerSelection === 'rock' && computerSelection === 'scissors')
    return 'player'
  if (playerSelection === 'paper' && computerSelection === 'rock')
    return 'player'
  if (playerSelection === 'scissors' && computerSelection === 'paper')
    return 'player'
  return 'pc'
}

function game(rounds = 5) {
  let playerScore = 0;
  let pcScore = 0;
  for (let i = 0; i < rounds; i++) {
    let playerChoice = prompt('Rock, Paper or Scissors: ', 'Rock').toLowerCase();
    let pcChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, pcChoice);
    
    playerChoice = toCapital(playerChoice);
    pcChoice = toCapital(pcChoice);

    let message = `Round ${i + 1}: `;
    if (roundResult === 'draw') {
      message += `is a draw. Both choose ${playerChoice}`;
    } else if (roundResult === 'player') {
      message += `You Won! ${playerChoice} beats ${pcChoice}`;
      playerScore++;
    } else {
      message += `You Lose! ${pcChoice} beats ${playerChoice}`;
      pcScore++;
    }
    console.log(message);
  }
  let gameResult =
  playerScore === pcScore ? "There's no winner, result is a draw!" :
  playerScore > pcScore ? "Winner - player" : "Winner - pc";
  return gameResult
}
console.log(game());