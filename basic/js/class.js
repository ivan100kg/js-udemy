'use strict';

const button = document.querySelector('button');
console.log(document.querySelector('button').classList);
console.log(document.querySelector('button').classList.item(0));

button.addEventListener('click', () => {
    button.classList.toggle('hui');
});

const parentEl = button.parentElement.parentElement;
console.log(parentEl);
parentEl.addEventListener('click', (event) => {
    if(event?.target?.tagName === 'BUTTON'){
        console.log(event.target);
    }
});