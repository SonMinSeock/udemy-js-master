const section = document.querySelector("section");
const toggleBtn = document.querySelector("button");
const ul = document.querySelector("ul");
const div = document.querySelector("div");

//section.style.backgroundColor = "green";
//section.className = "red-bg visible";
section.classList.add("red-bg", "visible");

toggleBtn.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.classList.toggle = "red-bg invisible";
  //   } else {
  //     section.className = "red-bg visible";
  //   }
  section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

ul.innerHTML = `${ul.innerHTML} <li>item 4</li>`;
