'use strict';

const inputField = document.querySelector('#usd');
const outputField = document.querySelector('#rub');
inputField.addEventListener('input', () => {
    const request = new XMLHttpRequest();           // объект
    //        method, url, async(true), login, pass // параметры
    request.open('GET', 'js/example.json');         // настройки запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();                                 // запрос(в POST передаем в параметры)
    request.addEventListener('load', () => {
        if(request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            outputField.value = (inputField.value / data.curren.usd).toFixed(2);
        } else {
            console.log(request.response);
            outputField.value = 'unknown';
        }
    });

});