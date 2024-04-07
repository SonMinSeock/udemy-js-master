const person = {
  name: "손민석",
  age: 25,
  hobbies: ["게임", "영화"],
  //   greet: function () {
  //     alert("안녕하세요~");
  //   },
  greet() {
    alert("안녕하세요~");
  },
};

person.isAdmin = true;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = false;
console.log(person);
