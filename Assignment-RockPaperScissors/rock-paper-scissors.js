const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleEvent)
});

function handleEvent(event) {
    play(event.target.id, getComputerChoice());
}

function printResult(number, playerSelection, computerSelection) {
    const roundResultDiv = document.createElement('div');
    let result;
    if (number < 0) {
        result = "You Lose!", playerSelection, "loses against", computerSelection;
    } else if (number > 0) {
        result = "You Win!", playerSelection, "beats", computerSelection;
    } else {
        result = "Draw!"
    }
    roundResultDiv.textContent = result
    body.appendChild(roundResultDiv);
}

function play(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            computerScore++;
            result = "Computer wins.";
        } else if (computerSelection.toLowerCase() === "scissors") {
            playerScore++;
            result = "Player wins.";
        } else {
            result = "Draw";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "scissors") {
            computerScore++;
            result = "Computer wins.";
        } else if (computerSelection.toLowerCase() === "rock") {
            playerScore++;
            result = "Player wins.";
        } else {
            result = "Draw";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "rock") {
            computerScore++;
            result = "Computer wins.";
        } else if (computerSelection.toLowerCase() === "paper") {
            playerScore++;
            result = "Player wins.";
        } else {
            result = "Draw";
        }
    } else {
        result = "Error"
    }
    const roundResultDiv = document.createElement('div');
    roundResultDiv.textContent = result;
    body.appendChild(roundResultDiv);

    console.log("player score", playerScore);
    console.log("computer score", computerScore);

    if (playerScore >= 5) {
        announceWinner('PLAYER');
    }
    if (computerScore >= 5) {
        announceWinner('COMPUTER');
    }

}

function announceWinner(winner) {
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button => {
        button.removeEventListener('click', handleEvent);     
    });
    const announcementDiv = document.createElement('div');
    announcementDiv.textContent = `Winner is = ${winner}`;
    body.appendChild(announcementDiv);
}
