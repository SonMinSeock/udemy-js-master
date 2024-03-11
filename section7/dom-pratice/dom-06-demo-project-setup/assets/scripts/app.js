const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancleAddModalButton = document.querySelector(".modal__actions .btn--passive");
const confirmAddMovieButton = cancleAddModalButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

const movies = [];

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
}

startAddMovieButton.addEventListener("click", startAddMovieClickHandler);
cancleAddModalButton.addEventListener("click", cancleClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
