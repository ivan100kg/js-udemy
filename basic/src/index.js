'use strict';

// const mod = require('../js/main');  // импорт --------------------------+
// const myObj = new mod();            // создать объект ф-ии myModule из др файла
// console.log(myObj.hello());

import {one, two, sayHi} from '../js/main';
console.log(`${one} ${two}`);
sayHi();