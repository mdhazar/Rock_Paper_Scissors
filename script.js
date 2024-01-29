const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreElement = document.getElementById("player");
const computerScoreElement = document.getElementById("computer");

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    alert("The game is a tie!");
    return "The game is a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};
let playerScore = 0;
let computerScore = 0;

const playGame = (playerSelection) => {
  const computerSelection = getComputerChoice();
  console.log("You threw: " + playerSelection);
  console.log("The computer threw: " + computerSelection);

  const result = determineWinner(playerSelection, computerSelection);
  console.log(result);
  if (result.includes("You won!")) {
    playerScore++;
  } else if (result.includes("computer")) {
    computerScore++;
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
};
