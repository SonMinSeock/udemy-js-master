const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  //currentResult = currentResult + parseFloat(userInput.value);
  // currentResult = currentResult + parseInt(userInput.value);
  currentResult = currentResult + +userInput.value;
  console.log(typeof currentResult.toString());

  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
