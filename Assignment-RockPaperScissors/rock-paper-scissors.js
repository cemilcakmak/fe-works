console.log("Hello World!")
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function printResult(number, playerSelection, computerSelection) {
    if (typeof number === 'string') {
        console.log("Unexpected input");
    } else if (number < 0) {
        console.log("You Lose!", playerSelection, "loses against", computerSelection);
    } else if (number > 0) {
        console.log("You Win!", playerSelection, "beats", computerSelection);
    } else {
        console.log("Draw!");
    }
}

function play(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            result = -1;
        } else if (computerSelection.toLowerCase() === "scissors") {
            result = 1;
        } else {
            result = 0;
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "scissors") {
            result = -1;
        } else if (computerSelection.toLowerCase() === "rock") {
            result = 1;
        } else {
            result = 0;
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "rock") {
            result = -1;
        } else if (computerSelection.toLowerCase() === "paper") {
            result = 1;
        } else {
            result = 0;
        }
    } else {
        result = "Error"
    }
    printResult(result, playerSelection, computerSelection);
}

play("Scissors", getComputerChoice());