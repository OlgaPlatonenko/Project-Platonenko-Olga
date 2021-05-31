//import { films } from "./mock.js";
import { renderFilmsFromAPI } from "./render2.js";

async function getToken() {
    const respToken = await fetch('https://fe08-films.herokuapp.com/auth',
        {
            headers: {
                'Content-type': 'application/json'
            },
            method: "POST",
        });
        return await respToken.text();
      
}

export async function getFilmsList() {
    let token=JSON.parse(await getToken());
    const respfilmsList = await fetch('https://fe08-films.herokuapp.com/films',
        {
            headers: {            
                'Autorization': `Beare ${token.token}`
            },
            method: "GET",
        });
    const newfilms=await respfilmsList.json();  
   let films=Array.from(newfilms.films);
    if (localStorage.getItem('allFilms')===null){
        localStorage.setItem('allFilms', JSON.stringify(films));
       }
    return films; 
}

