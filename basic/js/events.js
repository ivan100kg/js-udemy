'use strict';

function clickMe() {
    console.log('clicked');
}

function clickMe2() {
    console.log('clicked2');
}

const delBtn = (e) => e.target.remove();

const btn = document.querySelector('#btn');
btn.addEventListener('click', clickMe);
btn.addEventListener('mouseenter', clickMe2);
btn.addEventListener('mouseout', delBtn);