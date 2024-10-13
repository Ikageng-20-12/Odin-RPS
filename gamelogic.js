let options = ["rock", "paper", "scissors"];
let random_comments_comp = ["How are you so bad at this? Are you For Real?", "I'm sorry, I'm just too good at this", "You're not very good at this, are you?", "I cannot believe you are being destroyed by a Computer, you supposed to be my maker"];
let random_comments_user = ["You're on fire!", "You're a genius!", "You're a legend!", "You're a beast!", "I guess you are really my maker, Just Better!"];

const computer_choice = () => {
    let random = Math.floor(Math.random() * 3);
    return options[random];
};

function logic(choice) {
    let computerChoice = computer_choice();
    let random_index = Math.floor(Math.random() * random_comments_comp.length);
    let comment = "";

    if (choice === computerChoice) {
        comment = "It's a tie!, Great minds think alike!";
    } else if ((choice === "rock" && computerChoice === "scissors") || (choice === "scissors" && computerChoice === "paper") || (choice === "paper" && computerChoice === "rock")) {
        comment = random_comments_user[random_index];
    } else if ((choice === "rock" && computerChoice === "paper") || (choice === "scissors" && computerChoice === "rock") || (choice === "paper" && computerChoice === "scissors")) {
        comment = random_comments_comp[random_index];
    } else {
        comment = "Invalid input. Please enter rock, paper, or scissors!!!";
    }

    document.getElementById('comments').textContent = comment;
    document.getElementById('computerChoice').textContent = computerChoice;
}
