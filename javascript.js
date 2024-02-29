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

/* function oneRound(playerChoice, comp = getComputerChoice()) {
    if (playerChoice === comp) {
        return "Tie!";
    }
} */

console.log(getComputerChoice());