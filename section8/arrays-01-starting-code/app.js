// const numbers = [1, 2, 3];

// console.log(numbers);

// // const moreNumbers = new Array("Hi", "Welcome");
// // const moreNumbers = new Array(5);
// // const moreNumbers = new Array(5, 2);
// // const moreNumbers = Array(5);
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yewMoreNumbers = Array.of(1, 4);
// console.log(yewMoreNumbers);

// // const anotherMoreNumbers = Array.from([1, 3]);
// const anotherMoreNumbers = Array.from("hello");
// console.log(anotherMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Son", { moreDetail: [] }];
// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];

// hobbies.push("Reading");
// hobbies.unshift("Coding");

// const poppedValue = hobbies.pop();
// hobbies.shift();

// console.log(poppedValue);
// console.log(hobbies);

// hobbies[1] = "Coding";
// console.log(hobbies);

// hobbies[5] = "Reading";
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, "Good Food", "Skating");

// const removedElement = hobbies.splice(0, 1);
// console.log(hobbies);
// console.log(removedElement);

// hobbies.splice(-1, 1);
// console.log(hobbies);

// hobbies.splice(0);
// console.log(hobbies);

const testResults = [1, 3.4, 3, 5.2, 32.1, 3, -10];
const storedResults = testResults.slice(2);

console.log(storedResults);
