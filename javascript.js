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

function consoleCheck() {
    console.log("Game Results: " + document.getElementById("results").innerHTML);
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt("Input Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        oneRound(playerChoice, computerSelection);

        if (playerChoice != null) {
            document.getElementById("results").innerHTML = "Player Score: " + playerScore + " // Computer Score: " + computerScore;
            /* Maybe can properly stop box initialization later? 
            setTimeout(oneRound, 0); */
        }

        consoleCheck();
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