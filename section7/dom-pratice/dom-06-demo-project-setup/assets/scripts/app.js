const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancleAddModalButton = document.querySelector(".modal__actions .btn--passive");
const confirmAddMovieButton = cancleAddModalButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

function renderNewMovieElement(title, imageUrl, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.classList.add("movie-element");
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="영화 이미지"/>
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}</p>
  </div>
  `;

  const movieList = document.getElementById("movie-list");
  movieList.append(newMovieElement);
}

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function clearMovieInput() {
  userInputs.forEach((userInput) => {
    userInput.value = "";
  });
}

function toggleBackgdrop() {
  backdrop.classList.toggle("visible");
}

function toggleAddMovieModal() {
  addMovieModal.classList.toggle("visible");
  toggleBackgdrop();
  clearMovieInput();
}

function startAddMovieClickHandler() {
  toggleAddMovieModal();
}

function backdropClickHandler() {
  toggleAddMovieModal();
}

function cancleClickHandler() {
  toggleAddMovieModal();
}

function addMovieHandler() {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  toggleAddMovieModal();
  updateUI();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
}

startAddMovieButton.addEventListener("click", startAddMovieClickHandler);
cancleAddModalButton.addEventListener("click", cancleClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
