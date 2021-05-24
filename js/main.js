
import { films, Film } from './modules/mock.js';
import { renderFilms } from './modules/render.js';
import {favFilms} from './modules/favorite.js';
import {searchFilm} from './modules/search.js';
import {sortByRating,sortByDate,sortBoxOffice} from './modules/sorting.js';


if (localStorage.getItem('allFilms')===null){
    localStorage.setItem('allFilms', JSON.stringify(films));
   }
   
const strFilms = JSON.parse(localStorage.getItem('allFilms'));
renderFilms(strFilms);
//renderFilms(films);
favFilms();
searchFilm();
sortByRating();
sortByDate();
sortBoxOffice();
