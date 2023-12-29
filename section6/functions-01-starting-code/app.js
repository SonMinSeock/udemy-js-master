const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYERS_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, userChoice) =>
  computerChoice === userChoice
    ? RESULT_DRAW
    : (computerChoice === ROCK && userChoice === PAPER) ||
      (computerChoice === PAPER && userChoice === SCISSORS) ||
      (computerChoice === SCISSORS && userChoice === ROCK)
    ? RESULT_PLAYERS_WINS
    : RESULT_COMPUTER_WINS;

/*
  if (computerChoice === userChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && userChoice === PAPER) ||
    (computerChoice === PAPER && userChoice === SCISSORS) ||
    (computerChoice === SCISSORS && userChoice === ROCK)
  ) {
    return RESULT_PLAYERS_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }*/

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is Starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  console.log(winner);
});
