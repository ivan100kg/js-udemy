'use strict';

console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'ok'
//     };

//     setTimeout(() => {
//         backendData.moidified = true;
//         console.log('data received ', backendData);
//     }, 2000);
// }, 2000);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...');
    
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'ok'
        };
        resolve(backendData);
    }, 2000);
});

promise.then(backendData => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            backendData.moidified = true;
            reject(backendData);
        }, 2000);
    })
        .then(clientData => {
            clientData.hui = true;
            return clientData;
        })
        .then(data => console.log('modified', data))
        .catch(err => console.log('Error', err))
        .finally(() => console.log('finally'));
});

// const test = time => new Promise(resolve => setTimeout(() => resolve(), time));

// Promise.all([test(1000), test(2000)]).then(() => console.log('success'));

