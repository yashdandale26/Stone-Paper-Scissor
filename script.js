let userScore = 0;
let compScore = 0;

//*Note: we usually use MODULAR WAY OF PROGRAMMING; For every single task, we use one function
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersScorePara = document.querySelector("#users-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    // From rock, paper, scissor, the computer will generate randomly any one 
    const options = ["rock", "paper", "scissor"];
    // Generate random choice -> number form -> because it's stored in an array
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    
    msg.innerText = 'Game was draw. Play again!' 
    msg.style.backgroundColor = " #081b32";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; //to display the score
        usersScorePara.innerText = userScore;
        
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
  //is used to show consol msg to html page
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        //is used to show consol msg to html page
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice:", userChoice); // playGame knows what the user's choice is 
    // Generate computer choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice =", compChoice);

    // Check who wins between user and computer 
    if (userChoice === compChoice) { // draw game
        drawGame();
    } else {
        let userWin = true;
        // Winning conditions
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;  // Corrected the typo here
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
