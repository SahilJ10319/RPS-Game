const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';
const choices = [ROCK, PAPER, SCISSORS];

let userChoice = '';
let userScore = 0;
let computerChoice = '';
let computerScore = 0;
let tries = 0;
let result = '';

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getUserChoice() {
    while (tries < 3) { 
        userChoice = prompt("rock, paper, or scissors?").toLowerCase();
        switch(userChoice) {
            case ROCK:
            case SCISSORS:
            case PAPER:
                console.log(`You chose ${userChoice}`);
                return userChoice;
            default:
                console.log("Invalid Choice! Try Again");
                tries++;
        }
    }
    console.log("Maximum Number of Tries Reached! Game Over!");
}

function playRound(userChoice, computerChoice) {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    result = ` ${userChoice} vs ${computerChoice} `;
    
    if (userChoice !== ROCK && userChoice !== SCISSORS && userChoice !== PAPER) {
        return result + "Invalid choice. Please choose ROCK, SCISSORS, or PAPER.";
    }
    
    if (userChoice === computerChoice) {
        return result + ", It's a tie";
    }
    
    switch(userChoice) {
        case ROCK:
            if(computerChoice == PAPER) {
                return result + ", You lose! Paper beats Rock!";
            }
            else if(computerChoice == SCISSORS) {
                return result + ", You Win! Rock beats Scissors!";
            }
            break;
        case SCISSORS:
            if(computerChoice == PAPER) {
                return result + ", You Win! Scissors beats Paper!";
            }
            else if(computerChoice == ROCK) {
                return result + ", You lose! Rock beats Scissors!";
            }
            break;
        case PAPER:
            if(computerChoice == ROCK) {
                return result + ", You Win! Paper beats Rock!";
            }
            else if(computerChoice == SCISSORS) {
                return result + ", You lose! Scissors beats Paper!";
            }
            break;
    }
}

