"use strict";

function showMessage(msg) {
    console.log(`Hello ${msg}!`);
}

showMessage('hui');

function first() {
    setTimeout(function() {
        console.log('first');
    }, 1000);
}

function second() {
    setTimeout(function() {
        console.log('second');
    }, 500);
}

function invoke(num, callback) {
    console.log(num);
    callback();
}

invoke(12, first);