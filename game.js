'use strict';

const playOptions = ['rock', 'paper', 'scissors'];

let getRandomInt = n => Math.floor(Math.random() * n);
// n not included

let getComputerChoice = () => playOptions[getRandomInt(playOptions.length)];

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection)
    return `draw`

  if (playerSelection === 'rock' && computerSelection === 'paper')
    return 'pc'
  if (playerSelection === 'rock' && computerSelection === 'scissors')
    return 'player'

  if (playerSelection === 'paper' && computerSelection === 'rock')
    return 'player'
  if (playerSelection === 'paper' && computerSelection === 'scissors')
    return 'pc'

  if (playerSelection === 'scissors' && computerSelection === 'rock')
    return 'pc'
  if (playerSelection === 'scissors' && computerSelection === 'paper')
    return 'player'
}

function game(rounds = 5) {
  const score = {
    'player': 0,
    'pc': 0
  }
  for (let i = 0; i < rounds; i++) {
    let roundResult = playRound(prompt('Rock, Paper or Scissors: ', 'Rock'), getComputerChoice());
    if (roundResult === 'draw') {
      console.log(`Round ${i + 1} is a draw`);
    } else {
      console.log(`Round ${i + 1} winner is ${roundResult}`);
      score[roundResult]++;
    }
  }
  let gameResult =
    score['player'] === score['pc'] ? "There's no winner, result is a draw!" :
    score['player'] > score['pc'] ? "Winner is player" : "Winner is pc";
  return gameResult
}
console.log(game());

// rock > scissors
// paper > rock
// scissors > paper
