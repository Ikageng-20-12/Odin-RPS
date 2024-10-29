document.getElementById('startButton').addEventListener('click', function() {
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
});

function startEmojiIteration() {
    const letterDisplay = document.getElementById('letterDisplay');
    const options = ["✊", "📃", "✂️"];
    let index = 0;
    document.getElementById('computerChoice').textContent = "??";
    const interval = setInterval(() => {
        letterDisplay.textContent = options[index];
        index++;
        if (index >= options.length) {
            clearInterval(interval);
            setTimeout(() => {
                letterDisplay.textContent = "✊📃✂️";
                enableChoiceButtons(); 
            }, 500); 
        }
       
    }, 500); 
}

function disableChoiceButtons() {
    document.getElementById('rockButton').disabled = true;
    document.getElementById('paperButton').disabled = true;
    document.getElementById('scissorsButton').disabled = true;
}

function enableChoiceButtons() {
    document.getElementById('rockButton').disabled = false;
    document.getElementById('paperButton').disabled = false;
    document.getElementById('scissorsButton').disabled = false;
}

document.getElementById('resetButton').addEventListener('click', function() {
    const letterDisplay = document.getElementById('letterDisplay');
    letterDisplay.textContent = '✊📃✂️';
    disableChoiceButtons(); 
    counter_comp = 0;
    counter_user = 0;
    results(); 

    document.getElementById('comments').textContent = "Let's Go!!";
    document.getElementById('computerChoice').textContent = "??";
});

document.getElementById('rockButton').addEventListener('click', function() {
    logic("rock");
});

document.getElementById('paperButton').addEventListener('click', function() {
    logic("paper");
});

document.getElementById('scissorsButton').addEventListener('click', function() {
    logic("scissors");
});