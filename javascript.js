/* Score starts at 0 */
let playerScore = 0;
let computerScore = 0;

/* Buttons */
const rockBtn = document.querySelector('.option-rock');
const paperBtn = document.querySelector('.option-paper');
const scissorsBtn = document.querySelector('.option-scissors');

/* Button Event Listeners */
rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

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
    if (playerChoice.toUpperCase() === "ROCK") {
        if (comp === "SCISSORS") {
            playerScore++;
        } else if (comp === 'PAPER') {
            computerScore++;
        } else {
            console.log('tie');
        }
        console.log('player:[' + playerChoice + '] score:[' + 
        playerScore + ']' + 'comp:[' + comp + '] score:[' + computerScore + ']');
    } else if (playerChoice.toUpperCase() === "SCISSORS") {
        if (comp === "PAPER") {
            playerScore++;
        } else if (comp === 'ROCK') {
            computerScore++;
        } else {
            console.log('tie');
        }
        console.log('player:[' + playerChoice + '] score:[' + 
        playerScore + ']' + 'comp:[' + comp + '] score:[' + computerScore + ']');
    } else if (playerChoice.toUpperCase() === "PAPER") {
        if (comp === "ROCK") {
            playerScore++;
        } else if (comp === 'SCISSORS') {
            computerScore++;
        } else {
            console.log('tie');
        }
        console.log('player:[' + playerChoice + '] score:[' + 
        playerScore + ']' + 'comp:[' + comp + '] score:[' + computerScore + ']');
    } else {
        console.log('deadgame');
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