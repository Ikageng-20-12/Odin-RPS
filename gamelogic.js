
let options = ["rock", "paper", "scissors"];

let userchoice = prompt("Please enter your choice (rock, paper, or scissors): ");
const computer_choice = () => {
    let random = Math.floor(Math.random() * 3);
    return options[random];
    };


function logic(choice){

    if (choice === computer_choice()) {
        console.log("Would you look at that, great minds think alike! It's a tie!");
    }
    else if(choice === "rock" && computer_choice() === "scissors" || choice === "scissors" && computer_choice() === "paper" || choice === "paper" && computer_choice() === "rock"){
        console.log("Congratulations! You won!");
    }
    else if(choice === "rock" && computer_choice() === "paper" || choice === "scissors" && computer_choice() === "rock" || choice === "paper" && computer_choice() === "scissors"){
        console.log("Sorry, you lost!", "I as the computer went for: ", computer_choice());
    }
    else{
        console.log("Invalid input. Please enter rock, paper, or scissors!!!");
    }
}

logic(userchoice);
