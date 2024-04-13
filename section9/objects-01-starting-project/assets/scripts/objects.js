const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  const filteredMovies = !filter ? movies : movies.filter((movie) => movie.info.title.includes(filter));

  movieList.innerHTML = "";
  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    let text = `${movie.info.title} - `;
    for (const key in movie.info) {
      if (key !== "title") {
        text = `${text}${key} : ${movie.info[key]}`;
      }
    }
    movieElement.textContent = text;
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

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
