const movieList = document.getElementById("movie-list");
const userChosenKeyName = "level";
const person = {
  "first name": "손",
  age: 25,
  hobbies: ["게임", "영화"],
  [userChosenKeyName]: 1, // level : 1 객체 프로퍼티를 동적으로 만듬.
  //   greet: function () {
  //     alert("안녕하세요~");
  //   },
  greet() {
    alert("안녕하세요~");
  },
  1.5: "hello",
};

console.log(person[1.5]);
console.log(person);

person.isAdmin = true;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = false;

const keyName = "first name";
console.log(person[keyName]);

movieList.style["background-color"] = "red";
movieList.style.display = "block";
