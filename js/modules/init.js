export function initial() {   
    let input = document.querySelector('.search__input');
    input.value = '';
    const btnSortBox = document.getElementById('boxOffice');
    let btnPrevChecked = document.getElementsByClassName('button button_checked')[0];
    btnPrevChecked.classList.remove('button_checked');
    btnSortBox.classList.add('button_checked');

}