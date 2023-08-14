const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// 입력 필드에서 값을 가지고 온다.
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// 계산 로그 생성과 작성.
function createAndWriteOutput(opperator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${opperator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vender file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  //currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber;

  createAndWriteOutput("+", initalResult, enteredNumber);

  const logEntry = {
    operation: "ADD",
    prevResult: initalResult,
    number: enteredNumber,
    result: currentResult,
  };
  // logEntries.push(logEntry["number"]);
  logEntries.push(logEntry["operation"]);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult -= enteredNumber;

  createAndWriteOutput("-", initalResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult *= enteredNumber;

  createAndWriteOutput("*", initalResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult /= enteredNumber;

  createAndWriteOutput("/", initalResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
