import { getRandomInt } from '../modules/utils.js';
import { films, Film } from '../modules/mock.js';
import { renderFilms } from '../modules/render.js';

export function favFilms() {
    //клики по плюсикам
    let favouriteFilm = [];
    let notFavouriteFilm = [];
    for (let i = 0; i < films.length; i++) {
        notFavouriteFilm[i] = films[i];
    }
    let btnsAdd = document.getElementsByClassName('button_add');
  //  localStorage.setItem('allFilms', JSON.stringify(films));

    const handleClickFavourite = function (event) {
        let cardFoot = event.target.closest('div');
        let cardBody = cardFoot.previousElementSibling;
        let cardHeader = cardBody.previousElementSibling;
        let favoriteTitle = cardHeader.lastElementChild.innerText;
        let filmId = films.findIndex(function (film) {
            return film.title == favoriteTitle;
        });
        favouriteFilm.push(films[filmId]);   
        localStorage.setItem('favouriteFilms', JSON.stringify(favouriteFilm)); 
        localStorage.setItem('allFilms', JSON.stringify(notFavouriteFilm));
        films.splice(filmId, 1);
        localStorage.setItem('allFilms', JSON.stringify(films));
        renderFilms(JSON.parse(localStorage.getItem('allFilms')));
       // renderFilms(films);
        notFavouriteFilm.splice(filmId, 1);   
        let btnsAdd = document.getElementsByClassName('button_add');
        for (let btnAdd1 of btnsAdd) {
            btnAdd1.addEventListener('click', handleClickFavourite);
        }
    }

    for (let btnAdd of btnsAdd) {
        btnAdd.addEventListener('click', handleClickFavourite);
    }

    const handleCheckFavourite = function () {
        if (this.checked === true) {
            //renderFilms(favouriteFilm);
            renderFilms(JSON.parse(localStorage.getItem('favouriteFilms')));
            let btnsRemove = document.getElementsByClassName('button_remove');
            for (let btnRemove of btnsRemove) {
                btnRemove.addEventListener('click', handleClickRemoveFavourite);
            }
        } else {
            //renderFilms(notFavouriteFilm);        
            renderFilms(JSON.parse(localStorage.getItem('allFilms')));   
            let btnsAdd = document.getElementsByClassName('button_add');
            for (let btnAdd1 of btnsAdd) {
                btnAdd1.addEventListener('click', handleClickFavourite);
            }

        }
    }

    let checkFavourite = document.getElementById('favorite');
    checkFavourite.addEventListener('click', handleCheckFavourite);

    /****************************/
    const handleClickRemoveFavourite = function (event) {
        let cardFoot = event.target.closest('div');
        let cardBody = cardFoot.previousElementSibling;
        let cardHeader = cardBody.previousElementSibling;
        let favoriteTitle = cardHeader.lastElementChild.innerText;
        let filmId = favouriteFilm.findIndex(function (film) {
            return film.title == favoriteTitle;
        });
        notFavouriteFilm.push(favouriteFilm[filmId]);
        favouriteFilm.splice(filmId, 1);
        localStorage.setItem('favouriteFilms', JSON.stringify(favouriteFilm)); 
        localStorage.setItem('allFilms', JSON.stringify(notFavouriteFilm));
        renderFilms(JSON.parse(localStorage.getItem('favouriteFilms')));
        // renderFilms(favouriteFilm);
        let btnsRemove = document.getElementsByClassName('button_remove');
        for (let btnRemove of btnsRemove) {
            btnRemove.addEventListener('click', handleClickRemoveFavourite);
        }
    }
}