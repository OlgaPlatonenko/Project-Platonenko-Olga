import { renderFilmsFromAPI } from '../modules/render2.js';
import { getFilmsList } from '../modules/getFilmsFetch.js';
import { initial } from '../modules/init.js';

export function favFilms() {
    let favouriteFilm = [];
    let notFavouriteFilm = [];
    let films = JSON.parse(localStorage.getItem('allFilms'));
    for (let i = 0; i < films.length; i++) {
        notFavouriteFilm[i] = films[i];
    }

    const handleCheckFavourite = function () {
        if (this.checked === true) {
            initial();
            renderFilmsFromAPI(JSON.parse(localStorage.getItem('favouriteFilms')));
            let btnsRemove = document.getElementsByClassName('button_remove');
            for (let btnRemove of btnsRemove) {
                btnRemove.addEventListener('click', handleClickRemoveFavourite);
            }
        } else {
            renderFilmsFromAPI(JSON.parse(localStorage.getItem('allFilms')));
            let btnsAdd = document.getElementsByClassName('button_add');
            for (let btnAdd1 of btnsAdd) {
                btnAdd1.addEventListener('click', handleClickFavourite);
            }
        }
    }

    let checkFavourite = document.getElementById('favorite');
    checkFavourite.addEventListener('click', handleCheckFavourite);

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
        renderFilmsFromAPI(JSON.parse(localStorage.getItem('allFilms')));
        notFavouriteFilm.splice(filmId, 1);
        let btnsAdd = document.getElementsByClassName('button_add');
        for (let btnAdd1 of btnsAdd) {
            btnAdd1.addEventListener('click', handleClickFavourite);
        }
    }

    let btnsAdd = document.getElementsByClassName('button_add');
    for (let btnAdd of btnsAdd) {
        btnAdd.addEventListener('click', handleClickFavourite);
    }

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
        renderFilmsFromAPI(JSON.parse(localStorage.getItem('favouriteFilms')));
        let btnsRemove = document.getElementsByClassName('button_remove');
        for (let btnRemove of btnsRemove) {
            btnRemove.addEventListener('click', handleClickRemoveFavourite);
        }
    }

    let btnsRemove = document.getElementsByClassName('button_remove');
    for (let btnRem of btnsRemove) {
        btnRem.addEventListener('click', handleClickRemoveFavourite);
    }

}