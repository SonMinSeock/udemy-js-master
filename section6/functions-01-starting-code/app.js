const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is Starting...");
}

// const person = {
//   name: "Son MinSeock",
//   greet: function greet() {
//     console.log("Hello there!");
//   },
// };

// person.greet();

//console.log(typeof startGame);
console.dir(startGame);
startGameBtn.addEventListener("click", startGame);
