const buttonElements = document.querySelectorAll("button");

// buttonElement.onclick = () => alert("Hello!");
// buttonElement.onclick = () => console.log("클릭했네");

const buttonEventHandler = (event) => {
  console.log(event);
};

const buttonClickHandler = (event) => {
  event.target.disabled = true;
};

// buttonElement.addEventListener("click", buttonEventHandler);

// setTimeout(() => {
//   buttonElement.removeEventListener("click", buttonEventHandler);
// }, 2000);

// buttonElement.addEventListener("click", () => alert("안녕!~~"));

// setTimeout(() => {
//   buttonElement.removeEventListener("click", () => alert("안녕!~~"));
// }, 2000);

const bundFn = buttonEventHandler.bind(this);

buttonElements.forEach((btn) => {
  btn.addEventListener("mouseenter", buttonEventHandler);
});

// buttonElements.addEventListener("click", bundFn);

// setTimeout(() => {
//   buttonElement.removeEventListener("click", bundFn);
// }, 2000);
// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  console.log(document.documentElement.clientHeight + 150);
  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);
