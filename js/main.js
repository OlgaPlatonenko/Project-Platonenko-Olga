
import { getFilmsList } from './modules/getFilmsFetch.js';
import { renderFilmsFromAPI } from './modules/render2.js';
import { favFilms } from './modules/favorite.js';
import { searchFilm } from './modules/search.js';
import { sortByRating, sortByDate, sortBoxOffice } from './modules/sorting.js';

getFilmsList().then(() => {
  let films = JSON.parse(localStorage.getItem('allFilms'));
  renderFilmsFromAPI(films);
  favFilms();
  sortByRating();
  sortByDate();
  sortBoxOffice();
  searchFilm();
}
);

