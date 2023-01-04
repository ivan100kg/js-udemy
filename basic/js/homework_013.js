"use strict";

const numberOfFilms = +prompt("How many movies did you watch?", 0);

const personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genders = [];
personalMovieDB.privat = false;

let lastMovie;
let lastMovieRank;
for(let i = 3; i>0; i--){
    lastMovie = prompt("One of the last watched movie?", "");
    lastMovieRank = +prompt(`Rank of ${lastMovie}?`, 0);
    personalMovieDB.movies[lastMovie] = lastMovieRank;
}

console.log(personalMovieDB);