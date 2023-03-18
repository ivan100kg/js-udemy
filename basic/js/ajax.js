'use strict';

const message = {
    loading: 'Загрузка',
    success: 'Успешно',
    failure: 'Что-то пошло не так'
};

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

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const status = document.createElement('div');
        status.classList.add('status');
        status.textContent = message.loading;

        const request = new XMLHttpRequest();
        request.open('POST', 'server/');            // POST

        const formData = new FormData(form);        // спец объект формы(устар)

        // FormData to JSON
        request.setRequestHeader('Content-type', 'application/json');
        const obj = {};
        formData.forEach((value, key) => obj[key] = value);
        const json = JSON.stringify(obj);

        // request.send(formData);                     // отправить FormData
        request.send(json);                         // отправить JSON
        request.addEventListener('load', () => {
            if(request.status === 200) {
                console.log(request.response);
                status.textContent = message.success;
                form.reset();
                setTimeout(() => status.remove(), 2000);
            } else {
                console.log(request.response);
                status.textContent = message.failure;
            }
        });
    });
}