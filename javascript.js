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

/* FIXME: Create a function to just show final player/computer score for playGame() for loop. 
   Keep oneRound syntax to help with console debugging */

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt("Input Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        if (playerChoice != null) {
            document.getElementById("results").innerHTML = "Game Results: " + oneRound(playerChoice, computerSelection);
            /* Maybe can properly stop box initialization later? setTimeout(oneRound, 0); */
            /* Functionality Test: (Move to separate function?) */
            console.log("Game Results: " + document.getElementById("results").innerHTML);
        }
    }

    if (playerScore > computerScore) {
        document.getElementById("playerWon").innerHTML =
            "You beat the computer! SICK!";
    } else if (computerScore > playerScore) {
        document.getElementById("compWon").innerHTML =
            "Haha! A COMPUTER beat you!";
    } else if (playerScore === computerScore) {
        document.getElementById("tie").innerHTML ="IT'S A DRAW! Rematch?";
    } else {
        console.log("deadgame");
    }
}