
import { renderFilmsFromAPI } from '../modules/render2.js';

function sortByRate(arr) {
    return arr.sort((a, b) => a.Rated > b.Rated ? -1 : 1);
}

export function sortByRating() {
    const btnSortRate = document.getElementById('rating');
    const sortRate = function (event) {
        event.preventDefault();
        let btnPrevChecked = document.getElementsByClassName('button button_checked')[0];
        btnPrevChecked.classList.remove('button_checked');
        btnSortRate.classList.add('button_checked');
        let filmsNotSorted = JSON.parse(localStorage.getItem('allFilms'));
        let filmsSorted = sortByRate(filmsNotSorted);
        renderFilmsFromAPI(filmsSorted);
    }
    btnSortRate.addEventListener('click', sortRate);
}

/*********************************** */
/*
function getDateFilm(str) {
    let arrDate = str.split('-');
    let newStrDate = '20' + arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    return new Date(newStrDate);
}*/

function sortingDate(arr) {
    return arr.sort((a, b) => {      
       return (new Date(a.Released)).getTime() - (new Date(b.Released).getTime() );
    });
}

export function sortByDate() {
    const btnSortDate = document.getElementById('releaseDate');
    const sortDate = function (event) {
        event.preventDefault();
        let btnPrevChecked = document.getElementsByClassName('button button_checked')[0];
        btnPrevChecked.classList.remove('button_checked');
        btnSortDate.classList.add('button_checked');
        let filmsNotSorted = JSON.parse(localStorage.getItem('allFilms'));
              //  let newfilmsNotSorted = filmsNotSorted.map(obj => ({ ...obj, releseDate: getDateFilm(obj.releseDate) }))
        let filmsSorted = sortingDate(filmsNotSorted);
       renderFilmsFromAPI(filmsSorted);
    }
    btnSortDate.addEventListener('click', sortDate);
}

/************************ */
function sortByboxOffice(arr) {
    return arr.sort((a, b) => a.BoxOffice > b.BoxOffice ? -1 : 1);
}

export function sortBoxOffice() {
    const btnSortBox = document.getElementById('boxOffice');
    const sortBoxOff = function (event) {
        event.preventDefault();
        let btnPrevChecked = document.getElementsByClassName('button button_checked')[0];
        btnPrevChecked.classList.remove('button_checked');
        btnSortBox.classList.add('button_checked');
        let filmsNotSorted = JSON.parse(localStorage.getItem('allFilms'));
        let filmsSorted = sortByboxOffice(filmsNotSorted);
        renderFilmsFromAPI(filmsSorted);
    }
    btnSortBox.addEventListener('click', sortBoxOff);
}