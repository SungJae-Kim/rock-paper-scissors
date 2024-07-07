function getComputerChoice() {
    let x = Math.random() * 100;
    let rps = "";
    if (x < 100 / 3) {
        rps = "rock";
    } else if (x >= 100 / 3 && x <= 200 / 3) {
        rps = "paper";
    } else if (x > 200 / 3) {
        rps = "scissors";
    } 
    return rps;
}

function getHumanChoice() {
    let x = prompt("Rock Paper Scissors")
    return x;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let pc = getComputerChoice().toLowerCase();
    let human = getHumanChoice().toLowerCase();
    let roundWinner = "";
    let roundMsg = "";
    if (pc === "rock") {
        if (human === "paper") {
            roundWinner = "human";
        } else if (human === "scissors") {
            roundWinner = "pc";
        }
    } else if (pc === "paper") {
        if (human === "rock") {
            roundWinner = "pc";
        } else if (human === "scissors") {
            roundWinner = "human";
        }
    } else if (pc === "scissors") {
        if (human === "rock") {
            roundWinner = "human";
        } else if (human === "paper") {
            roundWinner = "pc";
        }
    }
    
    if (human != "rock" && human != "paper" && human != "scissors") {
        roundMsg = `You fool! ${human} is not a valid entry!`
    } else if (roundWinner === "pc") {
        roundMsg = `You lose! ${pc} beats ${human}`
        computerScore++;
    } else if (roundWinner === "human") {
        roundMsg = `You win! ${human} beats ${pc}`
        humanScore++;
    } else {
        roundMsg = `It's a tie, no one wins.`
    }

    return roundMsg;
}

function playGame() {
    for (let i = 0; i < 5;i++) {
        console.log(playRound());
        console.log(`Player: ${humanScore}, PC: ${computerScore}`)
    }
    return `Final Score - Player: ${humanScore}, PC: ${computerScore}`
}


console.log(playGame());