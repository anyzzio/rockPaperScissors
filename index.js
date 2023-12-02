
let playerWinsRound = 0;
let computerWinsRound = 0;


function playRound(){
    let playerSelection = (prompt("Choose your item: (ROCK) (PAPER) (SCISSORS)")).toUpperCase();
    let computerSelection = getComputerChoice();


    while(playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS"){
        console.log("Invalid choice! Please choose again.");
        playerSelection = prompt("Choose your item: (ROCK) (PAPER) (SCISSORS)").toUpperCase();
    }

    if(playerSelection === computerSelection){
        console.log("It`s a tie! Let`s play again.")
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

function game(){
    for(let i = 0;i < 5;i++){
        playRound();
    }


    if(playerWinsRound > computerWinsRound){
        console.log("Player Wins");
    }else if(computerWinsRound > playerWinsRound){
        console.log("Computer Wins");
    }else{
        console.log("Its a tie!")
    }
}



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

game();
