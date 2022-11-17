'use strict';

const openingWindow =  document.querySelector('.opening-window');
const gameWindow =  document.querySelector('.game');
const modalWindow =  document.querySelector('.modal-window');
const overlay = document.querySelector('#overlay');
const playerText = document.querySelector('#player');
const computerText = document.querySelector('#computer');

// Entering the game 
document.querySelector('#accept-button').addEventListener('click', () => {
    openingWindow.style.visibility ='hidden';
    openingWindow.style.display ='none';
    gameWindow.style.visibility ='visible';
    gameWindow.style.display = 'block';
    modalWindow.style.visibility ='hidden';
});
// Entering the modal-window
document.querySelector('.rules').addEventListener('click', () => {
    overlay.style.opacity = '1';
    openingWindow.style.visibility ='hidden';
    openingWindow.style.display ='none';
    modalWindow.style.visibility ='visible';
    modalWindow.style.display ='block';
});
// Extining the modal-window
document.querySelector('#x').addEventListener('click', () => {
    overlay.style.opacity = '0';
    openingWindow.style.visibility ='hidden';
    openingWindow.style.display ='none';
    modalWindow.style.visibility ='hidden';
    modalWindow.style.display ='none';
    gameWindow.style.visibility ='visible';
    gameWindow.style.display = 'block';
});


let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerChoice
const availableChoices = ["rock", "paper", "scissors"];
const rock = availableChoices[0];
const paper = availableChoices[1];
const scissors = availableChoices[2];
const choiceBtns = document.querySelectorAll(".choiceButton");



function displayComputer() {
    if (computerChoice == rock) {
    document.querySelector('#rock').style.color = "red";
    document.querySelector('#scissors').style.color = "black";
    document.querySelector('#paper').style.color = "black";
}
else if (computerChoice == paper) {
    document.querySelector('#paper').style.color = "rgb(253, 255, 117)";
    document.querySelector('#scissors').style.color = "black";
    document.querySelector('#rock').style.color= "black"
}
else {
    document.querySelector('#scissors').style.color = " rgb(251, 139, 255)";
    document.querySelector('#paper').style.color = "black";
    document.querySelector('#rock').style.color= "black";
    }
}


// Getting computer's choice
function getComputerChoice() { 
    const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
};

function checkWinner() {
    if(playerChoice == computerChoice) {
        console.log("Draw!");
        playerText.innerHTML = "Draw!";
        computerText.innerHTML = "Draw!";
        document.querySelector('.player-info').style.backgroundColor = 
        "aquamarine";
        document.querySelector('.computer-info').style.backgroundColor = 
        "aquamarine";
        displayComputer()
        return computerScore, playerScore;
    }
    else if (
        (computerChoice == rock && playerChoice == paper) ||
        (computerChoice == paper && playerChoice == scissors) ||
        (computerChoice == scissors && playerChoice == rock)) 
        {
        playerScore++;
        playerText.innerHTML = `Player wins,
        ${playerChoice} beats ${computerChoice}!`;
        computerText.innerHTML = "Computer loses.";
        document.querySelector('#player-score').innerHTML = playerScore;
        document.querySelector('#computer-score').innerHTML = computerScore;
        console.log(`Players score is ${playerScore}`)
        console.log(`Computers score is ${computerScore}`);
        document.querySelector('.player-info').style.backgroundColor = 
        "aquamarine";
        document.querySelector('.computer-info').style.backgroundColor = 
        "#161616";
        displayComputer();
        return computerScore, playerScore;

      }
      else {
        computerScore++;
        computerText.innerHTML = `Computer wins,
        ${computerChoice} beats ${playerChoice}!`;
        playerText.innerHTML = "You lose.";
        document.querySelector('#player-score').innerHTML = playerScore;
        document.querySelector('#computer-score').innerHTML = computerScore;
        console.log(`Computers score is ${computerScore}`)
        console.log(`Players score is ${playerScore}`);
        document.querySelector('.player-info').style.backgroundColor = 
        "#161616";
        document.querySelector('.computer-info').style.backgroundColor = 
        "aquamarine";
        displayComputer();
        return computerScore, playerScore;
      }
};

function endGame () {
    if (computerScore == 5) {
        document.querySelector('#playAgain').style.visibility = "visible";
        computerText.innerHTML = "👑 Computer wins!";
        document.querySelector('.player-info').style.pointerEvents = "none";
      
    } else if (playerScore == 5) { 
        document.querySelector('#playAgain').style.visibility = "visible";
        playerText.innerHTML = "👑 Player wins!";
        document.querySelector('.player-info').style.pointerEvents = "none";
    }
};

function reset() {
    document.querySelector('#playAgain').addEventListener('click', function() {
        computerScore = 0;
        playerScore = 0;
        document.querySelector('#player-score').innerHTML = playerScore;
        document.querySelector('#computer-score').innerHTML = computerScore;
        document.querySelector('#scissors').style.color = "black";
        document.querySelector('#rock').style.color= "black";
        document.querySelector('#paper').style.color= "black";
        playerText.innerHTML = "You";
        computerText.innerHTML = "Computer";
        document.querySelector('#playAgain').style.visibility = "hidden";
        document.querySelector('.player-info').style.backgroundColor = 
        "white";
        document.querySelector('.computer-info').style.backgroundColor = 
        "white";
        document.querySelector('.player-info').style.pointerEvents = "all";
    })
};

function game() {
    choiceBtns.forEach( button => button.addEventListener("click", () => {

    playerChoice = (button.textContent).toLowerCase();
    console.log(`Players choice is ${playerChoice}`);
    computerChoice = getComputerChoice();
    console.log(`Computers choice is ${computerChoice}`);
    checkWinner();
    console.log(computerScore);
    console.log(playerScore);
    endGame();
    reset();
}))};


game();


