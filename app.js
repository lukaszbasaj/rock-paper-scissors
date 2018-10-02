let userScore = 0;
let computerScore = 0;
const userScoreSelected = document.getElementById("user-score");
const computerScoreSelected = document.getElementById("computer-score");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");


function userWin(userChoice, computerChoice) {
    userScore++;
    userScoreSelected.innerHTML = userScore;
    computerScoreSelected.innerHTML = computerScore;
    result.innerHTML = `${userChoice} beats ${computerChoice}. You win`;
    console.log(userScore, computerScore);
};

function userLose(userChoice, computerChoice) {
    computerScore++;
    userScoreSelected.innerHTML = userScore;
    computerScoreSelected.innerHTML = computerScore;
    result.innerHTML = `${userChoice} cover ${computerChoice}. You lost`;
    console.log(userScore, computerScore);
};

function resultIsDraw(userChoice, computerChoice) {
    userScore++;
    computerScore++;
    userScoreSelected.innerHTML = userScore;
    computerScoreSelected.innerHTML = computerScore;
    result.innerHTML = `${userChoice} equals ${computerChoice}. We have a draw`;
    console.log(userScore, computerScore);
};



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userWin(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            userLose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            resultIsDraw(userChoice, computerChoice);
            break
    }
}


function main() {
    rock.addEventListener('click', function () {
        game("rock");
    });

    paper.addEventListener('click', function () {
        game("paper");
    });

    scissors.addEventListener('click', function () {
        game("scissors");
    });
   

};
main();

function setReset() {
    userScoreSelected.innerHTML = userScore;
    computerScoreSelected.innerHTML = computerScore;
    userScore = 0;
    computerScore = 0;
    return userScore, computerScore; 
};

function resetResult() {
    reset.addEventListener('click',function() {
      setReset();   
    });
};
resetResult();