let options = ["rock", "paper", "scissors"];
let random_comments_comp = ["How are you so bad at this? Are you For Real?", "I'm sorry, I'm just too good at this", "You're not very good at this, are you?", "I cannot believe you are being destroyed by a Computer, you supposed to be my maker"];
let random_comments_user = ["You're on fire!", "You're a genius!", "You're a legend!", "You're a beast!", "I guess you are really my maker, Just Better!"];

let counter_comp = 0; 
let counter_user = 0; 
let gameOver = false;

const computer_choice = () => {
    let random = Math.floor(Math.random() * 3);
    return options[random];
};

function logic(choice) {
    if (gameOver) return; 
    
    let computerChoice = computer_choice();
    let random_index = Math.floor(Math.random() * random_comments_comp.length);
    let comment = "";

    if (choice === computerChoice) {
        comment = "It's a tie!, Great minds think alike!";
    } else if ((choice === "rock" && computerChoice === "scissors") || (choice === "scissors" && computerChoice === "paper") || (choice === "paper" && computerChoice === "rock")) {
        comment = random_comments_user[random_index];
        counter_user += 1;
    } else if ((choice === "rock" && computerChoice === "paper") || (choice === "scissors" && computerChoice === "rock") || (choice === "paper" && computerChoice === "scissors")) {
        comment = random_comments_comp[random_index];
        counter_comp += 1;
    } else {
        comment = "Invalid input. Please enter rock, paper, or scissors!!!";
    }

    document.getElementById('comments').textContent = comment;
    document.getElementById('computerChoice').textContent = computerChoice;
    results(); 
    checkWinner(); 
}

function results() {
    document.getElementById('computerScore').textContent = counter_comp;
    document.getElementById('playerScore').textContent = counter_user;
}

function checkWinner() {
    if (counter_comp >= 3) {
        document.getElementById('comments').textContent = "Computer wins the game!";
        disableChoiceButtons(); 
        gameOver = true; 
    } else if (counter_user >= 3) {
        document.getElementById('comments').textContent = "You win the game!";
        disableChoiceButtons(); 
        gameOver = true; 
    }
}

function disableChoiceButtons() {
    document.getElementById('rockButton').disabled = true;
    document.getElementById('paperButton').disabled = true;
    document.getElementById('scissorsButton').disabled = true;
}

function enableChoiceButtons() {
    if (!gameOver) { 
        document.getElementById('rockButton').disabled = false;
        document.getElementById('paperButton').disabled = false;
        document.getElementById('scissorsButton').disabled = false;
    }
}


document.getElementById('startButton').addEventListener('click', function() {
    if (!gameOver) { 
        const letterDisplay = document.getElementById('letterDisplay');
        const countdownNumbers = [3, 2, 1];
        let countdownIndex = 0;

        disableChoiceButtons();

        const countdownInterval = setInterval(() => {
            letterDisplay.textContent = countdownNumbers[countdownIndex];
            countdownIndex++;
            if (countdownIndex >= countdownNumbers.length) {
                clearInterval(countdownInterval);
                startEmojiIteration();
            }
        }, 500); 
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    const letterDisplay = document.getElementById('letterDisplay');
    letterDisplay.textContent = '✊📃✂️';
    counter_comp = 0;
    counter_user = 0;
    gameOver = false;
    results(); 
    document.getElementById('comments').textContent = "Let's Go!!";
    document.getElementById('computerChoice').textContent = "??";
    enableChoiceButtons(); 
});
