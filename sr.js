'use strict';

let count = 39;
let logo = document.getElementById('logo');
let timeout = 1000;

function changeLogo() {
    let pic = Math.ceil(Math.random() * count);
    logo.src = '/SomethingRandom/' + pic + '.png';
    timeout -= timeout *= 0.01;
    if (timeout <= 20) {
        timeout = 20;
    }
    setTimeout(changeLogo, timeout);
}

setTimeout(changeLogo, timeout);
