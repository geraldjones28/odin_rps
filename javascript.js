function getComputerChoice() {
    let num = Math.floor(Math.random() * 30) + 1;
    
    if (num <= 10) {
        comp = "rock";
        return comp.toUpperCase();
    } else if (num > 10 && num <= 20) {
        comp = "paper";
        return comp.toUpperCase();
    } else {
        comp = "scissors";
        return comp.toUpperCase();
    }
}

/* function oneRound(playerChoice, comp = getComputerChoice()) {
    if (playerChoice === comp) {
        return "Tie!";
    }
} */

console.log(getComputerChoice());