const buttonElement = document.querySelector("button");

// buttonElement.onclick = () => alert("Hello!");
// buttonElement.onclick = () => console.log("클릭했네");

const buttonEventHandler = () => alert("Hello!");

buttonElement.addEventListener("click", buttonEventHandler);
// buttonElement.removeEventListener();
