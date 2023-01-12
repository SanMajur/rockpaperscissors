const choices = ["rock", "paper", "scissors"]
 const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
 }
const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'Player'
    } else {
        return 'Computer'
    }
}
 const playRound = (playerSelection, computerSelection) => {
    const results = checkWinner(playerSelection, computerSelection)
    if (results === 'Tie') {
        return 'It is a tie!'
    } else if (results === 'Player') {
        return `You Won! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
 }
 const getPlayerChoice = () => {
    let validatedInput = false;
    while (validatedInput == false) {
        const playerChoice = prompt('What is your choice Rock, Paper or Scissors')
        if (playerChoice == null){
            continue;
        }
        const playerChoiceToLower = playerChoice.toLowerCase();
        if(choices.includes(playerChoiceToLower)) {
            validatedInput = true;
            return playerChoiceToLower;
        }
    }
 }

const game = () => {
    console.log('Welcome to Rock, Paper and Scissors console Game!')
    let scorePlayer = 0;
    let scoreComputer = 0;
      for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        console.log('******************************************')
        if (checkWinner(playerSelection, computerSelection) === 'Player') {
            scorePlayer++;
        } else if ((checkWinner(playerSelection, computerSelection) === 'Computer')) {
            scoreComputer++;
        }
      }
      console.log('Game Over!')
      if (scorePlayer > scoreComputer){
        console.log('You won the game!')
      } else if (scorePlayer < scoreComputer) {
        console.log('Computer won the game!')
      } else {
        console.log('It is a draw!')
      }
  }
game()

