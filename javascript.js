function getComputerChoice() {
    let num = Math.floor(Math.random() * 3); + 1
    
    if (num === 0) {
        return "rock".toUpperCase();
    } else if (num === 1) {
        return "paper".toUpperCase();
    } else {
        return "scissors".toUpperCase();
    }
}

function oneRound(playerChoice, comp) {
    if (playerChoice.toUpperCase() === comp.toUpperCase()) {
        return "Tie!";
    } else if (playerChoice.toUpperCase() === "ROCK" && comp.toUpperCase() === "SCISSORS") {
        return "Player wins! Rock beats scissors!";
    } else if (comp.toUpperCase() === "ROCK" && playerChoice.toUpperCase() === "SCISSORS") {
        return "Computer wins! Rock beats scissors!";
    } else if (playerChoice.toUpperCase() === "SCISSORS" && comp.toUpperCase() === "PAPER") {
        return "Player wins! Scissors beats paper!";
    } else if (comp.toUpperCase() === "SCISSORS" && playerChoice.toUpperCase() === "PAPER") {
        return "Computer wins! Scissors beats paper!";
    } else if (playerChoice.toUpperCase() === "PAPER" && comp.toUpperCase() === "ROCK") {
        return "Player wins! Paper beats rock!";
    } else if (comp.toUpperCase() === "PAPER" && playerChoice.toUpperCase() === "ROCK") {
        return "Computer wins! Paper beats rock!";
    } else {
        return "null";
    }
}

console.log(oneRound("rock", getComputerChoice()));