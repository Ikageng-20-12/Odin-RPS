document.getElementById('startButton').addEventListener('click', function() {
    const letterDisplay = document.getElementById('letterDisplay');
    const options = ["✊", "📃", "✂️"];
    let index = 0;

    const interval = setInterval(() => {
        letterDisplay.textContent = options[index];
        index++;
        if (index >= options.length) {
            clearInterval(interval);
            setTimeout(() => {
                letterDisplay.textContent = "✊📃✂️";
            }, 1000); // Delay before resetting to the original content
        }
    }, 1000); // Change every second
});

document.getElementById('resetButton').addEventListener('click', function() {
    const letterDisplay = document.getElementById('letterDisplay');
    letterDisplay.textContent = '✊📃✂️';
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