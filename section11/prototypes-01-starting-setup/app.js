const course = {
  title: "자바스크립트 완벽가이드",
  rating: 4.5,
};

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRaitng: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRaitng();

const student = Object.create(
  {
    printProgress() {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "Son",
    },
  }
);

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 0.8,
});

student.printProgress();

console.log(student);
