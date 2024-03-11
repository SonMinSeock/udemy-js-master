const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cansleAddModalButton = document.querySelector(".modal__actions .btn--passive");

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

startAddMovieButton.addEventListener("click", toggleMovieModal);
cansleAddModalButton.addEventListener("click", cancleClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
