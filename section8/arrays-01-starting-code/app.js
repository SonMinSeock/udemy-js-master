const numbers = [1, 2, 3];

console.log(numbers);

// const moreNumbers = new Array("Hi", "Welcome");
// const moreNumbers = new Array(5);
// const moreNumbers = new Array(5, 2);
// const moreNumbers = Array(5);
const moreNumbers = Array(5, 2);
console.log(moreNumbers);

const yewMoreNumbers = Array.of(1, 4);
console.log(yewMoreNumbers);

// const anotherMoreNumbers = Array.from([1, 3]);
const anotherMoreNumbers = Array.from("hello");
console.log(anotherMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["Cooking", "Sports"];
const personalData = [30, "Son", { moreDetail: [] }];
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);
