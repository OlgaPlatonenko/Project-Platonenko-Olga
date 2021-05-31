
import { authorization } from '../modules/connect.js';

export function getFilms(){
    const xhrFilm=new XMLHttpRequest();
xhrFilm.open('GET','https://fe08-films.herokuapp.com/films');
xhrFilm.setRequestHeader('Autorization: Beare ', authorization());
xhrFilm.send();
listFilms=xhrFilm.response;
alert(listFilms);
xhrFilm.onreadystatechange=() =>{
    if(xhrFilm.readyState==3){
        alert('идет загрузка');
    }
}

}