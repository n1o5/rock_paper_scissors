function computerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let sym = prompt("Rock, paper, scissors SHOOT !!");
    if (sym === null || sym === "") {
        console.log("see you later");
    }
    else if (sym.toLowerCase() == "rock") {
        return 0;
    }
    else if (sym.toLowerCase() == "paper") {
        return 1;
    }
    else {
        return 2;
    }
}

function playRound(c, h) {
    if (h==c){
        return -1
    }
    else if ((h == 0 && c == 1) || (h == 1 && c == 2) || (h == 2 && c == 0)) {
        return 0;
    }
    else {
        return 1;
    }
}

function playGame() {
    const collection = new Map();
    collection.set(0, "Rock");
    collection.set(1, "Paper");
    collection.set(2, "Scissors");
    let rounds = prompt("How many rounds?");
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let h = getHumanChoice();
        let c = computerChoice();
        let score = playRound(c, h);
        if (score == -1) {
            console.log(`It's a draw`);
        }
        else if (score == 0) {
            console.log(`You lose !!`);
            computerScore += 1;
        }
        else {
            console.log(`You win !!`);
            humanScore += 1;
        }
    }
    if (humanScore > computerScore) {
        console.log(`You win !! your score: ${humanScore} || computer score: ${computerScore}`);
    }
    else if (humanScore == computerScore) {
        console.log(`it's a tie !! your score: ${humanScore} || computer score: ${computerScore}`);
    }
    else {
        console.log(`You lose !! your score: ${humanScore} || computer score: ${computerScore}`);
    }
}

playGame();