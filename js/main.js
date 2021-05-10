
import { films, Film } from './modules/mock.js';
import {renderFilms} from './modules/render.js';

renderFilms(films);

 //клики по плюсикам
 let favouriteFilm = [];
 let btnsAdd = document.getElementsByClassName('button_add');
 
 const handleClickFavourite = function (event) {
     let cardFoot = event.target.closest('div');
     let cardBody = cardFoot.previousElementSibling;
     let cardHeader = cardBody.previousElementSibling;
     let favoriteTitle = cardHeader.lastElementChild.innerText;    
     let filmId = films.findIndex(function (film) {
         return film.title == favoriteTitle;
     });    
     favouriteFilm.push(films[filmId]);   
     films.splice(filmId,1);    
     renderFilms(films);
     let btnsAdd = document.getElementsByClassName('button_add');
     for (let btnAdd1 of btnsAdd) {
         btnAdd1.addEventListener('click', handleClickFavourite);
     }
 }
 
 for (let btnAdd of btnsAdd) {
     btnAdd.addEventListener('click', handleClickFavourite);
 }



