'use strict'
let but = document.querySelector('#butt');
let none = document.querySelector('#non');
let type = none.getAttribute('type');
console.log(type);
let newType = 'button';

none.addEventListener('click', () => {
    if (type === 'text') {
        none.setAttribute(type, newType);
    }
    else {
        none.setAttribute(type, 'text');
    }
});