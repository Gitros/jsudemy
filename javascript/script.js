const movie = {
    title: 'Avengers',
}

function showMovie(price, cinema) {
    console.log(`Film ${this.title}, cena: ${price}, kino ${cinema},`);
}


showMovie(30, 'SuperKino');

// funkcja.call(obiekt, argumenty)
showMovie.call(movie, 35, 'SuperKino2');

// funkcja.apply(obiekt, tablica)
const movieData = [35, 'superKino2']

showMovie.apply(movie, movieData);
