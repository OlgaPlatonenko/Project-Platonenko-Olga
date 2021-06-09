let model = {
    title: '',
    releseDate: new Date(),
    plot: '',
    poster: '',
    boxOffice: '',
    rating: '',
    director: '',
}

const apiModel_temp = {
    Title: '',
    Released: new Date(),
    Plot: '',
    Poster: '',
    BoxOffice: '',
    Rated: '',
    Director: '',
}

function adapterAPIToModel(apiModel) {
    let newArr = new Array();
    for (let i = 0; i < apiModel.length; i++) {
        let vals = Object.values(apiModel[i]);        
        model = {
            title: vals[0],
            releseDate: vals[3],
            plot: vals[9],
            poster: vals[13],
            boxOffice: vals[21],
            rating: vals[2],
            director: vals[6],
        };
        newArr.push(model);
    }
    return newArr;
}

export { adapterAPIToModel };