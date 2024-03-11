const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancleAddModalButton = document.querySelector(".modal__actions .btn--passive");
const confirmAddMovieButton = cancleAddModalButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

function toggleMovieModal() {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
}

function backdropClickHandler() {
  toggleMovieModal();
}

function cancleClickHandler() {
  toggleMovieModal();
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
  }

  return;
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
cancleAddModalButton.addEventListener("click", backdropClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
