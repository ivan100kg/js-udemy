'use strict';

const number = 1;

// отдельный модуль со своей видимостью
(function(){    // анонимная самовызывающаяся ф-ия
    let number = 2;
    console.log(number);
}());

const user = (function() {
    const privat = () => {
        console.log('private');
    };
    return {
        sayHello: privat
    };
}());

console.log(number);

user.sayHello();