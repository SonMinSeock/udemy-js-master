const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    title === "" ||
    extraName.trim() === "" ||
    extraName === "" ||
    extraValue.trim() === "" ||
    extraName === ""
  ) {
    return;
  }
  const newMovie = {
    info: {
      title, // title: title
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log("newMovie : ", newMovie);
  console.log("movies : ", movies);
};

addMovieBtn.addEventListener("click", addMovieHandler);
