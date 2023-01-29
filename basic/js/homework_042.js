'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Тварь",
        "Скотт Пилигрим против..."
    ]
};

function load() {
    document.querySelector('.promo__adv').remove();
    document.querySelector('.promo__genre').textContent = 'ДРАМА';
    document.querySelector('.promo__bg').style.backgroundImage = 'url("../project/img/bg.jpg")';
    const submitButton = document.querySelector('button');
    submitButton.addEventListener('click', addMovie);
    updateMovieList();
}

function updateMovieList() {
    const moviesList = document.querySelectorAll('.promo__interactive-item');
    moviesList.forEach(el => el.remove());
    const moviesUl = document.querySelector('.promo__interactive-list');
    
    let li, div;
    movieDB.movies.sort();
    movieDB.movies.forEach((el, i) => {
        li = document.createElement('li');
        li.classList.add('promo__interactive-item');
        li.textContent = `${i}. ${el}`;
        div = document.createElement('div');
        div.classList.add('delete');
        div.addEventListener('click', delMovie);
        li.append(div);
        moviesUl.append(li);
    });
}

function addMovie(e) {
    e.preventDefault();
    const inputMovie = document.querySelector('.adding__input');
    const checkbox = document.querySelector('[type="checkbox"]');
    let text = inputMovie.value;
    if(text.length > 21) {
        text = text.slice(0,21) + '...';
    }
    movieDB.movies.push(text);
    if(checkbox.checked === true) {
        console.log(`Adding the favorite movie: ${text}`);
    }
    inputMovie.value = '';
    updateMovieList();
}

function delMovie(e) {
    const movie = e.target.parentElement;
    const newMoveArr = [];
    movieDB.movies.forEach(el => {
        if(movie.textContent.replace(/\d*. /,'') !== el) {
            newMoveArr.push(el);
            console.log(movie.textContent.includes(el));
        }
    });
    movieDB.movies = newMoveArr;
    updateMovieList();
}

document.addEventListener('DOMContentLoaded', load);