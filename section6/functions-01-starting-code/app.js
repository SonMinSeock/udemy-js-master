const startGameBtn = document.getElementById("start-game-btn");

const start = function () {
  console.log("Game is Starting...");
};

// const person = {
//   name: "Son MinSeock",
//   greet: function greet() {
//     console.log("Hello there!");
//   },
// };

// person.greet();

//console.log(typeof startGame);
console.dir(start);
startGameBtn.addEventListener("click", start);
