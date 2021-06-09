import { renderFilmsFromAPI } from '../modules/render2.js';
import { formatMoney } from '../modules/utils.js';


function sortByRate(arr) {
    return arr.sort((a, b) => a.rating > b.rating ? -1 : 1);
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

function sortingDate(arr) {
    return arr.sort((a, b) => {
        return (new Date(a.releseDate)).getTime() - (new Date(b.releseDate).getTime());
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
        let filmsSorted = sortingDate(filmsNotSorted);
        renderFilmsFromAPI(filmsSorted);
    }
    btnSortDate.addEventListener('click', sortDate);
}


function sortByboxOffice(arr) {
    return arr.sort((a, b) => formatMoney(a.boxOffice) > formatMoney(b.boxOffice) ? -1 : 1);
}

export function sortBoxOffice() {
    const btnSortBox = document.getElementById('boxOffice');
    const sortBoxOff = function (event) {
        event.preventDefault();
        let btnPrevChecked = document.getElementsByClassName('button button_checked')[0];
        btnPrevChecked.classList.remove('button_checked');
        btnSortBox.classList.add('button_checked');
        let filmsNotSorted = JSON.parse(localStorage.getItem('allFilms'));
        console.log(filmsNotSorted);
        let filmsSorted = sortByboxOffice(filmsNotSorted);
        console.log(filmsSorted);
        renderFilmsFromAPI(filmsSorted);
    }
    btnSortBox.addEventListener('click', sortBoxOff);
}