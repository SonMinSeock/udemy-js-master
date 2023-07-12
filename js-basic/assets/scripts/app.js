const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(opperator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${opperator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult + enteredNumber;

  createAndWriteOutput("+", initalResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult - enteredNumber;

  createAndWriteOutput("-", initalResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult * enteredNumber;

  createAndWriteOutput("*", initalResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult / enteredNumber;

  createAndWriteOutput("/", initalResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
