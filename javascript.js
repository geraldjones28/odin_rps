/* Score starts at 0 */
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

function playRound(playerChoice, comp) {
    if (playerChoice.toUpperCase() === comp) {
        return "Tie!";
    } else if (playerChoice.toUpperCase() === "ROCK" && comp === "SCISSORS") {
        playerScore++;
        return "Player: " + playerChoice.toUpperCase() + " | Computer: " + comp 
        + " | " + "Player point!" + " | PScore: " + playerScore;
    } else if (playerChoice.toUpperCase() === "SCISSORS" && comp === "PAPER") {
        playerScore++;
        return "Player: " + playerChoice.toUpperCase() + " | Computer: " + comp 
        + " | " + "Player point!" + " | PScore: " + playerScore;
    } else if (playerChoice.toUpperCase() === "PAPER" && comp === "ROCK") {
        playerScore++;
        return "Player: " + playerChoice.toUpperCase() + " | Computer: " + comp 
        + " | " + "Player point!" + " | PScore: " + playerScore;
    } else {
        computerScore++;
        return "Computer: " + comp + " | Player: " + playerChoice.toUpperCase() 
        + " | " + "Computer point! " + " | CScore: " + computerScore;
    }
}

function consoleCheck() {
    console.log("Game Results: " + document.getElementById("results").innerText);
}

// function playGame() {
//     for (let i = 1; i <= 1; i++) {
//         let playerChoice = prompt("Input Rock, Paper, or Scissors");
//         let computerChoice = getComputerChoice();
//         playRound(playerChoice, computerChoice);

//         if (playerChoice != null) {
//             document.getElementById("results").innerText = "Player Score: " + playerScore + 
//             " // Computer Score: " + computerScore;
//             /* Maybe can properly stop box initialization later? 
//             setTimeout(playRound, 0); */
//         }

//         consoleCheck();
//     }

//     if (playerScore > computerScore) {
//         document.getElementById("playerWon").innerText =
//             "You beat the computer! SICK!";
//     } else if (computerScore > playerScore) {
//         document.getElementById("compWon").innerText =
//             "Haha! A COMPUTER beat you!";
//     } else if (playerScore === computerScore) {
//         document.getElementById("tie").innerText ="IT'S A DRAW! Rematch?";
//     } else {
//         console.log("deadgame");
//     }
// }

function refreshPage() {
    location.reload();
}