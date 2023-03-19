'use strict';

const test = time => new Promise(resolve => setTimeout(() => resolve(), time));

Promise.all([test(1000), test(2000)]).then(() => console.log('success'));