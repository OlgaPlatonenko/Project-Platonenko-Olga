import { removeAllChildNodes } from '../modules/utils.js';
import { films, Film } from '../modules/mock.js';
import { getFilmsList } from '../modules/getFilmsFetch.js';
import { favFilms } from '../modules/favorite.js';

export function renderFilmsFromAPI(films) {
    const templateCard = document.getElementById('card-template').content.querySelector('.card');
    let filmlist = document.querySelector('.film-list');
    removeAllChildNodes(filmlist);

    films.forEach(film => {
        let cardNode = templateCard.cloneNode(true);
        let titleNode = cardNode.querySelector('.card-header__title');
        let releseDateNode = cardNode.querySelector('.film-info__release-date .film-info__text');
        let plotNode = cardNode.querySelector('.film-info__plot .film-info__text');
        let posterNode = cardNode.querySelector('.card-header__image');
        let boxOfficeNode = cardNode.querySelector('.film-info__box-office .film-info__text');
        let ratingNode = cardNode.querySelector('.film-info__rating .film-info__text');
        let directorNode = cardNode.querySelector('.film-info__director .film-info__text');
        let favouriteButton = cardNode.querySelector('.card__button ');
        let favoriteCheck = document.getElementById('favorite');
        if (favoriteCheck.checked) {
            favouriteButton.classList.add('button_remove');
        } else {
            favouriteButton.classList.add('button_add');
        }
        titleNode.textContent = film.title;
        releseDateNode.textContent = film.releseDate;
        plotNode.textContent = film.plot;
        posterNode.src = film.poster;
        boxOfficeNode.textContent = film.boxOffice;
        ratingNode.textContent = film.rating;
        directorNode.textContent = film.director;
        filmlist.append(cardNode);
    });
 //   favFilms();
}