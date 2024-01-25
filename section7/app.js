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

// ul.innerHTML = `${ul.innerHTML} <li>item 4</li>`;

const newLi = document.createElement("li");
newLi.textContent = "Item 4";
//ul.appendChild(newLi);
//ul.append(newLi);
// ul.prepend(newLi);
//ul.lastElementChild.before(newLi);
// ul.lastElementChild.after(newLi);
//ul.firstElementChild.replaceWith(newLi);
//const secondLi = ul.children[1];
//secondLi.insertAdjacentElement("afterend", newLi);
const newLiSecond = newLi.cloneNode(true);
ul.append(newLi, newLiSecond);
