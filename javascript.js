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

function determineWinner(human) {
    let roundWinner = "";
    if (human === "rock") {
        if (pc === "paper") {
            roundWinner = "pc";
        } else if (pc === "scissors") {
            roundWinner = "human";
        }
    }
    if (human === "paper") {
        if (pc === "scissors") {
            roundWinner = "pc";
        } else if (pc === "rock") {
            roundWinner = "human";
        }
    }
    if (human === "scissors") {
        if (pc === "rock") {
            roundWinner = "pc";
        } else if (pc === "paper") {
            roundWinner = "human";
        }
    }
    return roundWinner;
}

const result = document.querySelector("#result")

function playRock() {
    let human = "rock";
    let pc = getComputerChoice().toLowerCase();
    if (pc === "paper") {
        winner = "pc";
    } else if (pc === "scissors") {
        winner = "human";
    } else {
        winner = "neither";
    };
    const winnerText = " is the winner!";
    let msg = winner + winnerText;
    const winnerMsg = document.createElement("p");
    winnerMsg.textContent = msg;
    result.appendChild(winnerMsg)
}

function playPaper() {
    let human = "paper";
    let pc = getComputerChoice().toLowerCase();
    if (pc === "scissors") {
        winner = "pc";
    } else if (pc === "rock") {
        winner = "human";
    } else {
        winner = "neither";
    };
    const winnerText = " is the winner!";
    let msg = winner + winnerText;
    const winnerMsg = document.createElement("p");
    winnerMsg.textContent = msg;
    result.appendChild(winnerMsg)
}

function playScissors() {
    let human = "scissors";
    let pc = getComputerChoice().toLowerCase();
    if (pc === "rock") {
        winner = "pc";
    } else if (pc === "paper") {
        winner = "human";
    } else {
        winner = "neither";
    };
    const winnerText = " is the winner!";
    let msg = winner + winnerText;
    const winnerMsg = document.createElement("p");
    winnerMsg.textContent = msg;
    result.appendChild(winnerMsg)
}

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

rockbtn.addEventListener("click", function (e) {
    playRock();
})
paperbtn.addEventListener("click", function (e) {
    playPaper();
})
scissorsbtn.addEventListener("click", function (e) {
    playScissors();
})


/*
function playGame() {
    for (let i = 0; i < 5;i++) {
        console.log(playRound());
        console.log(`Player: ${humanScore}, PC: ${computerScore}`)
    }
    return `Final Score - Player: ${humanScore}, PC: ${computerScore}`
}
*/

//console.log(playGame());