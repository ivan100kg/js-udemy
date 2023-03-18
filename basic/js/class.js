'use strict';

const button = document.querySelector('button');
console.log(document.querySelector('button').classList);
console.log(document.querySelector('button').classList.item(0));

button.addEventListener('click', () => {
    button.classList.toggle('hui');
});

// const parentEl = button.parentElement.parentElement;
// console.log(parentEl);
// parentEl.addEventListener('click', (event) => {
//     if(event?.target?.tagName === 'BUTTON'){
//         console.log(event.target);
//     }
// });


const button2 = document.querySelector('#btn2');
button2.addEventListener('click', lengthOfLongestSubstring);
function lengthOfLongestSubstring() {
    let s = 'aab';
    let result = '';
    let maxLength = 0;

    console.log(s);
    for (let i = 0; i < s.length; i++) {
        console.log('char = ' + s[i]);
            console.log('index i = ' + i);
        if (result.includes(s[i])) {
            result += s[i];
            result = result.substring(result.indexOf(s[i]) + 1, result.length);
            console.log('substring result = ' + result);
            console.log('maxLength = ' + maxLength);
            console.log('result.length = ' + result.length);
        } else {
            result += s[i];
            if (result.length > maxLength) {
                maxLength = result.length;
                console.log('result = ' + result);
                console.log('maxLength = ' + maxLength);
                console.log('result.length = ' + result.length);
            }
        }
    }
    // return maxLength;

    console.log('maxLength = ' + maxLength);
};