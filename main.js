 const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
 }
console.log(getComputerChoice())

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase === 'rock'.toLowerCase && computerSelection === 'paper') {
        return 'You Lose! paper beats Rock'
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))