
import { films, Film } from './modules/mock.js';
import { renderFilms } from './modules/render.js';
import {favFilms} from './modules/favorite.js';
import {searchFilm} from './modules/search.js';

renderFilms(films);
favFilms();
searchFilm();

