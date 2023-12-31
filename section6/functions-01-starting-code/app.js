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
    return;
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

const getWinner = (computerChoice, userChoice = DEFAULT_USER_CHOICE) =>
  computerChoice === userChoice
    ? RESULT_DRAW
    : (computerChoice === ROCK && userChoice === PAPER) ||
      (computerChoice === PAPER && userChoice === SCISSORS) ||
      (computerChoice === SCISSORS && userChoice === ROCK)
    ? RESULT_PLAYERS_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is Starting...");

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let winner;

  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection, undefined);
  }

  let message = `You picked ${
    playerSelection ? playerSelection : DEFAULT_USER_CHOICE
  }, computer picked ${computerSelection} there for you `;

  if (winner === RESULT_DRAW) {
    message += "had a draw.";
  } else if (winner === RESULT_PLAYERS_WINS) {
    message += "won.";
  } else {
    message += "lost.";
  }

  alert(message);

  gameIsRunning = false;
});

// 게임에 관련있지 않은 코드.
function combine(resultHandler, operation, ...numbers) {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else if (operation === "SUB") {
      sum -= num;
    }
  }

  resultHandler(sum);
}

const showResult = (message, result) => {
  alert(message + " " + result);
};

const person1 = { name: "Jo" };

const person2 = {
  name: "Kim",
  study() {
    console.log(this.name + "이/가 공부를 하고 있습니다.");
  },
};

function greet(greeting, message) {
  return `${greeting} ${this.name}. ${message}`;
}

person2.study.call(person1);
console.log(greet.apply(person2, ["안녕~ ", "화이팅!!!"]));

combine(showResult.bind(this, "The result after adding all number is"), "ADD", 1, 2, 3, 4, 5);
combine(showResult.bind(this, "The result after subtracting all number is"), "SUB", 1, 2, 3, 4, 5, 6, 7, 8);
