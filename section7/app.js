const section = document.querySelector("section");
const toggleBtn = document.querySelector("button");

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
