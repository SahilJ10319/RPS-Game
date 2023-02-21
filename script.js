const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';
const choices = [ROCK, PAPER, SCISSORS];
const rounds = 5;

let userChoice = '';
let computerChoice = '';
let tries = 0;
let result = '';
let userWins = 0
let computerWins = 0

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
    result = `${userChoice} vs ${computerChoice}`;
    
    if (userChoice !== ROCK && userChoice !== SCISSORS && userChoice !== PAPER) {
        return console.log(result + "Invalid choice. Please choose ROCK, SCISSORS, or PAPER.");
    }
    
    if (userChoice === computerChoice) {
        return console.log(result + ", It's a tie");
    }
    
    switch(userChoice) {
        case ROCK:
            if(computerChoice == PAPER) {
                computerWins++;
                return console.log(result + ", You lose! Paper beats Rock!");
            }
            else if(computerChoice == SCISSORS) {
                userWins++;
                return console.log(result + ", You Win! Rock beats Scissors!");
            }
            break;
        case SCISSORS:
            if(computerChoice == PAPER) {
                userWins++;
                return console.log(result + ", You Win! Scissors beats Paper!");
            }
            else if(computerChoice == ROCK) {
                computerWins++;
                return console.log(result + ", You lose! Rock beats Scissors!");
            }
            break;
        case PAPER:
            if(computerChoice == ROCK) {
                userWins++;
                return console.log(result + ", You Win! Paper beats Rock!");
            }
            else if(computerChoice == SCISSORS) {
                computerWins++;
                return console.log(result + ", You lose! Scissors beats Paper!");
            }
            break;
    }
}

function game() {
    console.log("Welcome to Rock, Paper, Scissors. There will be 5 games, the one with the most number wins per round wins the game, a tie does not award a point")
    for(let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        playRound();
        console.log(`User Score: ${userWins} Computer Score: ${computerWins}`);
    }
    if(userWins > computerWins) {
        return console.log("You Win!");
    }
    else if(userWins < computerWins) {
        return console.log("You Lose!");
    }
    else {
        return console.log("It's a tie!");
    }
}

game();