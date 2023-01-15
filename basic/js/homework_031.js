'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    toggleVisibleMyDB: function () {
        if (this.private) {
            this.private = false;
        } else if (!this.private) {
            this.private = true;
        }
    },
    writeYourGenres: function () {
        while (true) {
            let answer = prompt('Your favorite genre: ');
            if(answer === undefined || answer === null || answer.trim() === '') {
                continue;
            } else if (answer === 'q') {
                break;
            }
            this.genres.push(answer);
        }
    }
};

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

