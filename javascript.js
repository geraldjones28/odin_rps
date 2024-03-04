/* Score starts at 0 */
let playerScore = 0;
let computerScore = 0;
const timeReset = 1000;

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

/* Score Results */
let scorePlayer = document.querySelector('#score-player');
let scoreComp = document.querySelector('#score-comp');
scorePlayer.innerHTML = 'PLAYER: ' + playerScore;
scoreComp.innerHTML = 'COMPUTER: ' + computerScore;

/* Game Results */
const playerWon = document.querySelector('#player-won');
const compWon = document.querySelector('#comp-won');

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

/* Button color temporarily change depending on round winner */
function greenButton(btn) {
    btn.style.backgroundColor = "#90ee90";
}
function redButton(btn) {
    btn.style.backgroundColor = "#ffcccb";
}
function purpleButton(btn) {
    btn.style.backgroundColor = "#CBC3E3";
}

/* Simulates a round of RPS based on which button user clicks */
function playRound(playerChoice, comp) {
    /* if-else game results branches */
    if (playerChoice.toUpperCase() === "ROCK") {
        if (comp === "SCISSORS") {
            playerScore++;
            roundPlayer.innerHTML = 'PLAYER WINS';
            greenButton(rockBtn);
            setTimeout(clearFunction, timeReset);
        } else if (comp === 'PAPER') {
            computerScore++;
            roundComp.innerHTML = 'COMPUTER WINS';
            redButton(rockBtn);
            setTimeout(clearFunction, timeReset);
        } else {
            roundTie.innerHTML = 'TIE';
            purpleButton(rockBtn);
            setTimeout(clearFunction, timeReset);
        }
        scorePlayer.innerHTML = 'PLAYER: ' + playerScore;
        scoreComp.innerHTML = 'COMPUTER: ' + computerScore;
    } else if (playerChoice.toUpperCase() === "PAPER") {
        if (comp === "ROCK") {
            playerScore++;
            roundPlayer.innerHTML = 'PLAYER WINS';
            greenButton(paperBtn);
            setTimeout(clearFunction, timeReset);
        } else if (comp === 'SCISSORS') {
            computerScore++;
            roundComp.innerHTML = 'COMPUTER WINS';
            redButton(paperBtn);
            setTimeout(clearFunction, timeReset);
        } else {
            roundTie.innerHTML = 'TIE';
            purpleButton(paperBtn);
            setTimeout(clearFunction, timeReset);
        }
        scorePlayer.innerHTML = 'PLAYER: ' + playerScore;
        scoreComp.innerHTML = 'COMPUTER: ' + computerScore;
    } else if (playerChoice.toUpperCase() === "SCISSORS") {
        if (comp === "PAPER") {
            playerScore++;
            roundPlayer.innerHTML = 'PLAYER WINS';
            greenButton(scissorsBtn);
            setTimeout(clearFunction, timeReset);
        } else if (comp === 'ROCK') {
            computerScore++;
            roundComp.innerHTML = 'COMPUTER WINS';
            redButton(scissorsBtn);
            setTimeout(clearFunction, timeReset);
        } else {
            roundTie.innerHTML = 'TIE';
            purpleButton(scissorsBtn);
            setTimeout(clearFunction, timeReset);
        }
        scorePlayer.innerHTML = 'PLAYER: ' + playerScore;
        scoreComp.innerHTML = 'COMPUTER: ' + computerScore;
    } else {
        refreshPage();
    }

    if ((playerScore === 5) || (computerScore === 5)) {
        gameResults();
    }
}

/* Displays the winner of the game! */
function gameResults() {
    if (playerScore === 5) {
        playerWon.innerHTML = 'GAME OVER. YOU WIN!';
    }
    if (computerScore === 5) {
        compWon.innerHTML = 'GAME OVER. COMPUTER WINS!';
    }
    setTimeout(refreshPage, 3000);
}

/* Clears the innerHTML & Button Colors of round results */
function clearFunction() {
    roundPlayer.innerHTML = '';
    roundComp.innerHTML = '';
    roundTie.innerHTML = '';

    rockBtn.style.backgroundColor = '';
    paperBtn.style.backgroundColor = '';
    scissorsBtn.style.backgroundColor = '';
}

/* Reset Game button functionality */
function refreshPage() {
    location.reload();
}