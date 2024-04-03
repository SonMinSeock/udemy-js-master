// 1.  var, let, const 스코프 이해하기.
// var name = "Son";
// var name = "Kim";

// // {
// //   let test = 5;
// //   console.log(test);
// // }

// // console.log(test);

// if (name === "Kim") {
//   let hobies = ["sports", "games"];
//   console.log(hobies);
// }

// function greet() {
//   var age = 25;
//   console.log(name, age, hobies);
// }

// console.log(name, hobies);

// greet();

// 2. 호이스팅 이해.
// console.log(username);
// var username = "Son";

// 3. 엄격 모드 이해.
// "use strict";
// var username = "Son";
// var undefined = 1;
// console.log(username);

// 4. JS엔진이 코드를 어떻게 분석 할까?
function getUserName() {
  return prompt("Your Name: ", "");
}

function greet() {
  const userName = getUserName();
  console.log("Hello " + userName);
}

greet();
