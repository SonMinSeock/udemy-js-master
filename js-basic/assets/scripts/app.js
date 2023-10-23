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

function writeToLog(operationIdentifier, prevResult, enteredNumber, currentResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: enteredNumber,
    result: currentResult,
  };
  // logEntries.push(logEntry["number"]);
  logEntries.push(logEntry["operation"]);
  console.log(logEntries);
}

function calaculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUB" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }

  const initalResult = currentResult;
  let mathOperator;

  //currentResult = currentResult + enteredNumber;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUB") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initalResult, enteredNumber);
  writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

function add() {
  calaculateResult("ADD");
}

function subtract() {
  calaculateResult("SUB");
}

function multiply() {
  calaculateResult("MULTIPLY");
}

function divide() {
  calaculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
