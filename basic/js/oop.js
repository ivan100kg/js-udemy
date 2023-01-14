'use strict';

const primitiveStr = 'ui';
const objStr = new String();

console.log(typeof(primitiveStr));
console.log(typeof(objStr));

const arr = [1,2,3,4];
const ob = {1:2,3:4};
console.log(arr);
console.log(ob);

const soldier = {
    health: 400,
    armor: 100,
    hello: function() {
        console.log(`hello`);
    }
};

const john = {
    health: 100
};

const mike = Object.create(soldier);

// john.__proto__ = soldier;
// console.log(john.armor);


Object.setPrototypeOf(john, soldier);

console.log(john);
