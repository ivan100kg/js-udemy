'use strict';

function myModule() {               // функция - модуль
    this.hello = function(){
        console.log('hello!');
    };

    this.bye = function(){
        console.log('bye!');
    };
}

module.exports = myModule;          // для вызова из других файлов