
import { films, Film } from './modules/mock.js';
import { renderFilms } from './modules/render.js';
import {favFilms} from './modules/favorite.js';

renderFilms(films);
favFilms();

