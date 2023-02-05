const choices = ["rock", "paper", "scissors"];

let userChoice = '';
let userScore = 0;
let computerChoice = '';
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

console.log(getComputerChoice());