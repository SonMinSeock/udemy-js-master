// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Son";
//   constructor() {
//     super();
//     this.age = 25;
//   }
//   greet() {
//     console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
//   }
// }

function Person() {
  this.name = "Son";
  this.age = 25;
  this.greet = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
  };
}

Person.prototype.printAge = function () {
  console.log(this.age);
};

const person = new Person();

person.greet();

console.dir(Person);
console.log(person.__proto__);

const p2 = new person.__proto__.constructor();
console.log(p2);
