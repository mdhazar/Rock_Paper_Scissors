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
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
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
const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors");
    const computerSelection = getComputerChoice();
    console.log("You threw: " + playerSelection);
    console.log("The computer threw: " + computerSelection);
    console.log(determineWinner(playerSelection, computerSelection));
  }
};
