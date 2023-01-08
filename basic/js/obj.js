"use strict";


const obj = {
    name: 'test',
    width: 2048,
    color: {
        r: 128,
        b: 128,
        g: 128
    },
    testFoo: function() {
        console.log(`foo of ${this}`);
    }
};

const fruits = [
    'apple',
    'strawberry',
    'redberry',
    'blueberry'
];

// console.log(obj);
// console.log(fruits);

for (let key in obj) {
    console.log(`key=${key} value=${obj[key]}`);
}

for (let value of fruits) {
    console.log(`value=${value}`);
}

fruits.forEach(el => console.log(el));

const strTypes = [1,'string', NaN, null, undefined, [], {}, true, Infinity, 145n, function(){}, Symbol()];
strTypes.forEach(el=>console.log(typeof(el)));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

obj.testFoo();

const {r,g,b} = obj.color;
console.log(g);