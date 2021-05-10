import { getRandomInt } from '../modules/utils.js';

let filmsTitle = [
    'Ford против Ferrari',
    'Интерстеллар',
    'Зверополис',
    'Стражи Галактики',
    'Марсианин',
    'Довод',
    'Мстители',
    'Душа',
    'Смолфут',
    'Однажды в Голливуде'
];

let filmsPlots = [
    'Фантастический эпос про задыхающуюся Землю, космические полеты и парадоксы времени. «Оскар» за спецэффекты',
    'Биография знаменитого гонщика Кена Майлза и драма об искренней и чистой любви к быстрой езде',
    'Отважная крольчиха Джуди делает полицейскую карьеру. Ей предстоит раскрыть заговор в огромном зверином городе',
    'Питер Квилл и горстка неземных неудачников спасают таинственный артефакт. Снято по комиксам MARVEL',
    'Мэтт Дэймон выживает на красной планете',
    'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
    'Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком',
    'Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у легендарной саксофонистки и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы.',
    'Молодой находчивый йети сталкивается с тем, кого, по его глубокому убеждению, не существует – человеком. Новости о «смолфуте» приносят ему славу и шанс завоевать девушку его мечты. А ещё – вызывают переполох среди простых йети, которые теперь гадают, кто же ещё обитает в большом мире за пределами их маленькой заснеженной деревушки',
    '1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'
];

let filmsPosters = [
    'http://127.0.0.1:5500/images/posters/ford_ferrari.jpg',
    'http://127.0.0.1:5500/images/posters/guardians-galaxy.jpg',
    'http://127.0.0.1:5500/images/posters/interstelar.jpg',
    'http://127.0.0.1:5500/images/posters/zootopia.jpg',
    'http://127.0.0.1:5500/images/posters/mars.jpg',
    'http://127.0.0.1:5500/images/posters/tenet.jpg',
    'http://127.0.0.1:5500/images/posters/avengers.jpg',
    'http://127.0.0.1:5500/images/posters/soul.jpg',
    'http://127.0.0.1:5500/images/posters/smallfoot.jpg',
    'http://127.0.0.1:5500/images/posters/hollywood.jpg'
];

let filmsDirectors = [
    'Кристофер Нолан',
    'Джеймс Мэнголд',
    'Байрон Ховард',
    'Джеймс Ганн',
    'Ридли Скотт',
    'Кристофер Нолан',
    'Джосс Уидон',
    'Пит Доктер',
    'Кэри Киркпатрик',
    'Квентин Тарантино'
];

function getFilmsTitle(filmsTitle) {
    let indTitle = getRandomInt(0, filmsTitle.length - 1);
    return filmsTitle[indTitle];
}

function getFilmsPlot(filmsPlots) {
    let indPlot = getRandomInt(0, filmsPlots.length - 1);
    return filmsPlots[indPlot];
}

function getFilmsPoster(filmsPosters) {
    let indPoster = getRandomInt(0, filmsPosters.length - 1);
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

function getRandomData(dataBegin, dataEnd) {
    let dat1 = Date.parse(dataBegin);
    let dat2 = Date.parse(dataEnd);
    let randomData = new Date(getRandomInt(dat1, dat2));
    return formatDate(randomData);
}

function getBoxOffice(min, max) {
    let sum = getRandomInt(min, max);
    let sumMln = Math.trunc(sum / 1000000);
    let sumThousand = Math.trunc((sum - sumMln * 1000000) / 1000);
    let sumHundreds = (sum - sumMln * 1000000 - sumThousand * 1000);
    return `$${sumMln},${sumThousand},${sumHundreds}`;
}

function getRating(min, max) {
    return getRandomInt(min, max);
}

function getFilmsDirector(filmsDirectors) {
    let indDir = getRandomInt(0, filmsDirectors.length - 1);
    return filmsDirectors[indDir];
}

export function Film() {       
    this.title = getFilmsTitle(filmsTitle);
    this.releseDate = getRandomData('01-01-2000', '01-01-2020');
    this.plot = getFilmsPlot(filmsPlots);
    this.poster = getFilmsPoster(filmsPosters);
    this.boxOffice = getBoxOffice(500000, 1000000000);
    this.rating = getRating(1, 10);
    this.director = getFilmsDirector(filmsDirectors);
    this.isFavourite = 'false';

}

export let films = new Array(10);
for (let i = 0; i < 10; i++) {
    films[i] = new Film();
}



