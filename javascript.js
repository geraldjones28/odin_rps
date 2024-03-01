/* Score resets every game */
let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        return "Player: " + playerChoice.toUpperCase() + " | Computer: " + comp + " | " + "Player point!" + " | PScore: " + playerScore;
    } else if (playerChoice.toUpperCase() === "SCISSORS" && comp.toUpperCase() === "PAPER") {
        playerScore++;
        return "Player: " + playerChoice.toUpperCase() + " | Computer: " + comp + " | " + "Player point!" + " | PScore: " + playerScore;
    } else if (playerChoice.toUpperCase() === "PAPER" && comp.toUpperCase() === "ROCK") {
        playerScore++;
        return "Player: " + playerChoice.toUpperCase() + " | Computer: " + comp + " | " + "Player point!" + " | PScore: " + playerScore;
    } else {
        computerScore++;
        return "Computer: " + comp + " | Player: " + playerChoice.toUpperCase() + " | " + "Computer point! " + " | CScore: " + computerScore;
    }
}


/*FIXME: Possibly make a nested loop to input each game result? */
function playGame() {
    for (let i = 1; i <= 2; i++) {
        let playerChoice = prompt("Input Rock, Paper, or Scissors", "Poop");
        let computerSelection = getComputerChoice();
        
        document.getElementById("name").innerHTML =
            "Game Results: " + oneRound(playerChoice, computerSelection);
    }

    if (playerScore > computerScore) {
        console.log("You beat the computer! SICK!");
    } else if (computerScore > playerScore) {
        console.log("Haha. A COMPUTER beat you.");
    } else if (playerScore === computerScore) {
        console.log("IT'S A DRAW! Rematch?");
    } else {
        console.log("deadgame");
    }
}

/* playGame(); */