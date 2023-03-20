'use strict';

// GET
// fetch('https://httpbin.org/get')    // url
// .then(response => response.json())  // ответ в JSON ковертируем в объект
// .then(obj => console.log(obj));     // обрабатываем дальше наш объект

// // POST
// fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: JSON.stringify({name: 'Mike'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })   // url
// .then(response => response.json())  // ответ в JSON ковертируем в объект
// .then(obj => console.log(obj));     // обрабатываем дальше наш объе

const inputField = document.querySelector('#usd');
const outputField = document.querySelector('#rub');
inputField.addEventListener('input', () => {
    fetch('js/example.json')                // url
    .then(response => response.json())
    .then(response => {
        outputField.value = (inputField.value / response.curren.usd).toFixed(2);
    })
    .catch(err => console.log('Error', err));
});