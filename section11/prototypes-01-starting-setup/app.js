/*
class Person {
  name = "Son";
  constructor() {
    this.age = 25;
  }
  greet() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
  }
}
*/

function Person() {
  this.name = "Son";
  this.age = 25;
  this.greet = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
  };
}

const person = new Person();

person.greet();
