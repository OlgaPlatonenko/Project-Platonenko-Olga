
//import { films, Film } from './modules/mock.js';
import {getFilmsList} from './modules/getFilmsFetch.js';
//import {films} from './modules/getFilmsFetch.js';
import { renderFilmsFromAPI } from './modules/render2.js';
import {favFilms} from './modules/favorite.js';
import {searchFilm} from './modules/search.js';
import {sortByRating,sortByDate,sortBoxOffice} from './modules/sorting.js';
import {initial} from './modules/init.js';

/*
if (localStorage.getItem('allFilms')===null){
    localStorage.setItem('allFilms', JSON.stringify(films));
   }
  */ 
//const strFilms = JSON.parse(localStorage.getItem('allFilms'));
//renderFilms(strFilms);
//renderFilms(films);

getFilmsList().then(() =>{
  let films=JSON.parse(localStorage.getItem('allFilms'));
  console.log(films);
  renderFilmsFromAPI(films);
  favFilms();
  sortByRating();
  sortByDate();
  sortBoxOffice();
  searchFilm();
}
 
);


//favFilms();
//renderFilms(new Array(getFilmsList()));
