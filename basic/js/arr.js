'use strict';

let arr = ['a','b','c','d'];

arr.forEach(function(value, index, array) {
    console.log(`${value} : ${index} : ${array}`);
});

arr.forEach((val, ind, arr)  => console.log(val));

console.log(arr.map(el => el.toUpperCase()));
console.log(arr.filter(el => el !== 'a'));