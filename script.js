const choices = ["rock", "paper", "scissors"];

let userChoice = '';
let userScore = 0;
let computerChoice = '';
let computerScore = 0;
let tries = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getUserChoice() {
    while (tries < 3) { 
        userChoice = prompt("rock, paper, or scissors?").toLowerCase();
        switch(userChoice) {
            case "rock":
            case "scissors":
            case "paper":
                console.log(`You chose ${userChoice}`);
                return userChoice;
            default:
                console.log("Invalid Choice! Try Again");
                tries++;
        }
    }
    console.log("Maximum Number of Tries Reached! Game Over!");
}

// console.log(getComputerChoice());
console.log(getUserChoice());