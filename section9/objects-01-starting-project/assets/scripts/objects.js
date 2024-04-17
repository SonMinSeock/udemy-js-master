"use strict";
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

    const { info } = movie;
    let { getFormattedTitle } = movie;

    // const { title: movieTitle } = info;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // let text = `${getFormattedTitle.call(movie)} - `;
    let text = `${getFormattedTitle.apply(movie)} - `;

    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = `${text}${key} : ${info[key]}`;
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
      // title, // title: title
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
