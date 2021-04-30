
 //возвращает целое число от beg до end
 function getRandomInt(beg,end){
     let x=Math.random()*(end-beg+1)+beg;
     return parseInt(x); 
   }

 
 let filmsTitle=[
    'Ford против Ferrari',
    'Интерстеллар',
    'Зверополис',
    'Стражи Галактики',
    'Марсианин' ];

 let filmsPlots=[
    'Фантастический эпос про задыхающуюся Землю, космические полеты и парадоксы времени. «Оскар» за спецэффекты',
    'Биография знаменитого гонщика Кена Майлза и драма об искренней и чистой любви к быстрой езде',
    'Отважная крольчиха Джуди делает полицейскую карьеру. Ей предстоит раскрыть заговор в огромном зверином городе',
    'Питер Квилл и горстка неземных неудачников спасают таинственный артефакт. Снято по комиксам MARVEL',
    'Мэтт Дэймон выживает на красной планете' ]; 

    let filmsPosters=[
      'http://127.0.0.1:5500/images/posters/ford_ferrari.jpg',
      'http://127.0.0.1:5500/images/posters/guardians-galaxy.jpg',
      'http://127.0.0.1:5500/images/posters/interstelar.jpg',
      'http://127.0.0.1:5500/images/posters/zootopia.jpg',
      'http://127.0.0.1:5500/images/posters/mars.jpg' ]; 

      let filmsDirectors=[
         'Кристофер Нолан',
         'Джеймс Мэнголд',
         'Байрон Ховард',
         'Джеймс Ганн',
         'Ридли Скотт' ];

    function getFilmsTitle(filmsTitle){
      let indTitle=getRandomInt(0,filmsTitle.length-1);
      return filmsTitle[indTitle];
   }
  function getFilmsPlot(filmsPlots){
     let indPlot=getRandomInt(0,filmsPlots.length-1);
     return filmsPlots[indPlot];
  }
  
 function getFilmsPoster(filmsPosters){
    let indPoster=getRandomInt(0,filmsPosters.length-1);
    return filmsPosters[indPoster];
 }

//дату в формат dd-mm-yyyy
 function formatDate(date) {
   var dd = date.getDate();
   if (dd < 10) dd = '0' + dd; 
   var mm = date.getMonth() + 1;
   if (mm < 10) mm = '0' + mm; 
   var yy = date.getFullYear() % 100;
   if (yy < 10) yy = '0' + yy; 
   return dd + '-' + mm + '-' + yy;
 }

 function getRandomData(dataBegin,dataEnd){
   let dat1=Date.parse(dataBegin);
   let dat2=Date.parse(dataEnd);
    let randomData=new Date(getRandomInt(dat1,dat2));
    return formatDate(randomData);    
 }

 function getBoxOffice(min,max){
    let sum= getRandomInt(min,max);
    let sumMln=Math.trunc(sum/1000000);
    let sumThousand=Math.trunc((sum-sumMln*1000000)/1000);
    let sumHundreds=(sum-sumMln*1000000-sumThousand*1000);
    return `$${sumMln},${sumThousand},${sumHundreds}`;
 }

 function getRating(min,max){
    return getRandomInt(min,max);
 }

function getFilmsDirector(filmsDirectors){
   let indDir=getRandomInt(0,filmsDirectors.length-1);
   return filmsDirectors[indDir];
}

let film={
   title: getFilmsTitle(filmsTitle),
   releseDate: getRandomData('01-01-2000','01-01-2020'),
   plot: getFilmsPlot(filmsPlots),
   poster: getFilmsPoster(filmsPosters),
   boxOffice: getBoxOffice(500000,1000000000),
   rating: getRating(1,10),
   director: getFilmsDirector(filmsDirectors),
}

