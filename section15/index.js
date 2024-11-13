// 순수 함수, 비순수 함수
// 순수 함수 첫 번째 예시.
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 2)); // 12
console.log(add(10, 5)); // 15

// 비순수 함수 첫 번째 예시.
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// 비순수 함수 두 번째 예시.
let prevResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  prevResult = sum;
  return sum;
}

console.log(addMoreNumbers(10, 2));

// 비순수 함수 세 번째 예시.
const hobbies = ["Sports", "Cooking"];
function printHobbies(h) {
  hobbies.push("New Hobby");
  console.log(h);
}

printHobbies(hobbies);

// 팩토리 함수
let multiplier = 1.1;

function createTaxCalcurator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalcurator(0.19);
const calculateIncomeTax = createTaxCalcurator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// 클로저 실습
let username = "lee";
function greetUser() {
  //   let name = "son";
  console.log("Hi " + name);
}

let name = "park";

username = "kim";
greetUser();

// 재귀
function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2 = 8

// 고급 재귀
const myself = {
  name: "son",
  friends: [
    {
      name: "lee",
      friends: [{ name: "kim" }],
    },
    {
      name: "mike",
    },
  ],
};

function printFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) return [];

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
}

console.log(printFriendNames(myself));
