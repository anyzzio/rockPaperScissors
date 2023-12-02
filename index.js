
let playerWinsRound = 0;
let computerWinsRound = 0;
let tieRound = 0;

const playerScore = document.querySelector("#scorePlayer");
const pcScore = document.querySelector("#scorePc");
const tieScore = document.querySelector("#scoreTie");

const btnRock = document.querySelector("#btn1");
const btnPaper = document.querySelector("#btn2");
const btnScissors = document.querySelector("#btn3");

const winner = document.querySelector("#announceWinner");


function playRound(item){
    let playerSelection = item;
    let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        console.log("It`s a tie! Let`s play again.")
        tieRound++;
    }else if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        return computerWinsRound++;
    }else if(playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        return computerWinsRound++;
    }else if(playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return computerWinsRound++;
    }else{
        return playerWinsRound++;
    }
}


function resetScores() {
    playerWinsRound = 0;
    computerWinsRound = 0;
    tieRound = 0;
    playerScore.textContent = playerWinsRound;
    pcScore.textContent = computerWinsRound;
    tieScore.textContent = tieRound;
}

function updateScores() {
    playerScore.textContent = playerWinsRound;
    pcScore.textContent = computerWinsRound;
    tieScore.textContent = tieRound;
}

function winnerAndNewRound() {
    if (playerWinsRound === 5) {
        winner.textContent = "Player";
        resetScores();
    } else if (computerWinsRound === 5) {
        winner.textContent = "Computer";
        resetScores();
    }
}

btnRock.addEventListener("click", () => {
    playRound("ROCK");
    updateScores();
    winnerAndNewRound();
});

btnPaper.addEventListener("click", () => {
    playRound("PAPER");
    updateScores();
    winnerAndNewRound();
});

btnScissors.addEventListener("click", () => {
    playRound("SCISSORS");
    updateScores();
    winnerAndNewRound();
});

function randomizer(){
    let random = Math.floor((Math.random() * 3)+1);
    return random;
}

function getComputerChoice(){
    let num = randomizer();
    if (num === 3){
        return "ROCK"
    }else if(num === 2){
        return "PAPER"
    }else{
        return "SCISSORS"
    }
}


