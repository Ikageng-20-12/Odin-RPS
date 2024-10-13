
let options = ["rock", "paper", "scissors"];
let random_index = Math.floor(Math.random() * 8);
let random_comments_comp = ["How are you so bad at this? Are you For Real?", "I'm sorry, I'm just too good at this", "You're not very good at this, are you?","I cannot believe you are being destroyed by a Computer, you supposed to be my maker"]
let random_comments_user = ["You're on fire!", "You're a genius!", "You're a legend!", "You're a beast!", "I guess you are really my maker, Just Better!"];
let userchoice = prompt("Please enter your choice (rock, paper, or scissors): ");
const computer_choice = () => {
    let random = Math.floor(Math.random() * 3);
    return options[random];
    };


function logic(choice){

    if (choice === computer_choice()) {
        console.log("It's a tie!, Great minds think alike!");
    }
    else if(choice === "rock" && computer_choice() === "scissors" || choice === "scissors" && computer_choice() === "paper" || choice === "paper" && computer_choice() === "rock"){
        let comment = random_comments_user[random_index];
        console.log(comment);
    }
    else if(choice === "rock" && computer_choice() === "paper" || choice === "scissors" && computer_choice() === "rock" || choice === "paper" && computer_choice() === "scissors"){
        let comment = random_comments_comp[random_index];
        console.log(comment);
    }
    else{
        console.log("Invalid input. Please enter rock, paper, or scissors!!!");
    }
}

logic(userchoice);
