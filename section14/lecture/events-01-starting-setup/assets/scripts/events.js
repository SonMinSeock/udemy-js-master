const buttonElement = document.querySelector("button");

// buttonElement.onclick = () => alert("Hello!");
// buttonElement.onclick = () => console.log("클릭했네");

const buttonEventHandler = () => alert("Hello!");

// buttonElement.addEventListener("click", buttonEventHandler);

// setTimeout(() => {
//   buttonElement.removeEventListener("click", buttonEventHandler);
// }, 2000);

// buttonElement.addEventListener("click", () => alert("안녕!~~"));

// setTimeout(() => {
//   buttonElement.removeEventListener("click", () => alert("안녕!~~"));
// }, 2000);

const bundFn = buttonEventHandler.bind(this);

buttonElement.addEventListener("click", bundFn);

setTimeout(() => {
  buttonElement.removeEventListener("click", bundFn);
}, 2000);
