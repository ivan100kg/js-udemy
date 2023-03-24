'use strict';

// function myModule() {               // функция - модуль
//     this.hello = function(){
//         console.log('hello!');
//     };

//     this.bye = function(){
//         console.log('bye!');
//     };
// }

// module.exports = myModule;          // для вызова из других файлов


// ES6+
export let one = 1;                 // экспорт переменной
let two = 2;
const sayHi = () => console.log('Hi');
export {two, sayHi};                // именованный синтаксис
