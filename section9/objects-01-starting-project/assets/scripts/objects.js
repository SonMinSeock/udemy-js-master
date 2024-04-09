const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("li");
    movieElement.textContent = movie.info.title; // <li>어벤져스1</li>
    movieList.append(movieElement);
  });
};

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
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
