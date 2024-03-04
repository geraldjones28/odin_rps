/* Score starts at 0 */
let playerScore = 0;
let computerScore = 0;

/* Buttons */
const rockBtn = document.querySelector('#option-rock');
const paperBtn = document.querySelector('#option-paper');
const scissorsBtn = document.querySelector('#option-scissors');

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

/* Round Results */
let roundPlayer = document.querySelector('#round-player');
let roundComp = document.querySelector('#round-comp');
let roundTie = document.querySelector('#round-tie');

/* Randomizes computer choice */
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

/* Simulates a round of RPS based on which button user clicks */
function playRound(playerChoice, comp) {
    /* if-else game results branches */
    if (playerChoice.toUpperCase() === "ROCK") {
        if (comp === "SCISSORS") {
            playerScore++;
            roundPlayer.innerHTML = 'PLAYER WINS';
            setTimeout(clearFunction, 1500);
        } else if (comp === 'PAPER') {
            computerScore++;
            roundComp.innerHTML = 'COMPUTER WINS';
            setTimeout(clearFunction, 1500);
        } else {
            console.log('tie');
            roundTie.innerHTML = 'TIE';
            setTimeout(clearFunction, 1500);
        }
        console.log('player:[' + playerChoice + '] score:[' + 
        playerScore + ']' + 'comp:[' + comp + '] score:[' + computerScore + ']');
    } else if (playerChoice.toUpperCase() === "SCISSORS") {
        if (comp === "PAPER") {
            playerScore++;
            roundPlayer.innerHTML = 'PLAYER WINS';
            setTimeout(clearFunction, 1500);
        } else if (comp === 'ROCK') {
            computerScore++;
            roundComp.innerHTML = 'COMPUTER WINS';
            setTimeout(clearFunction, 1500);
        } else {
            console.log('tie');
            roundTie.innerHTML = 'TIE';
            setTimeout(clearFunction, 1500);
        }
        console.log('player:[' + playerChoice + '] score:[' + 
        playerScore + ']' + 'comp:[' + comp + '] score:[' + computerScore + ']');
    } else if (playerChoice.toUpperCase() === "PAPER") {
        if (comp === "ROCK") {
            playerScore++;
            roundPlayer.innerHTML = 'PLAYER WINS';
            setTimeout(clearFunction, 1500);
        } else if (comp === 'SCISSORS') {
            computerScore++;
            roundComp.innerHTML = 'COMPUTER WINS';
            setTimeout(clearFunction, 1500);
        } else {
            console.log('tie');
            roundTie.innerHTML = 'TIE';
            setTimeout(clearFunction, 1500);
        }
        console.log('player:[' + playerChoice + '] score:[' + 
        playerScore + ']' + 'comp:[' + comp + '] score:[' + computerScore + ']');
    } else {
        console.log('deadgame');
    }
}

/* Clears the innerHTML of round results after 1.5 seconds */
function clearFunction() {
    roundPlayer.innerHTML = '';
    roundComp.innerHTML = '';
    roundTie.innerHTML = '';
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