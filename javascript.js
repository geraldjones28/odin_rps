console.log("Hello, world!");

function getComputerChoice() {
    let num = Math.floor(Math.random() * 30) + 1;
    
    if (num <= 10) {
        return "Rock";
    } else if (num > 10 && num <= 20) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

console.log(getComputerChoice());