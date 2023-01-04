"use strict";

let answer;
let movieCounter = 0;
while(true) {
    answer = prompt("One of the last watched movie?", '');
    if(answer === '' || answer.length > 50){
        console.log('wrong answer!');
        continue;
    } else {
        movieCounter++;
    }
    if(answer === 'q') {
        break;
    }
}