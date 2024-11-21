'use strict'

// Игра учи мат часть!


/*let aaa = '';
let bbb = '';
let ccc = '';
let button = document.getElementById('btn');

button.addEventListener('click', createrElemsForFirst);

function createrElemsForFirst(){
    let first = document.createElement('input');
    first.setAttribute('type','number');
    first.setAttribute('id','first');
    document.body.appendChild(first);
    first.addEventListener('blur', () => {
        //aaa = String(first.textContent);
        aaa = first.value;
        if (aaa.length > 0) {
            aaa = Number(first.value);
            first.setAttribute('disabled','disabled');
            let second = document.createElement('input');
            second.setAttribute('type','number');
            document.body.appendChild(second);
            second.addEventListener('blur', () =>{
                bbb = second.value;
                if (bbb.length > 0) {
                    bbb = Number(second.value);
                    second.setAttribute('disabled','disabled');
                    let sum = document.createElement('input');
                    sum.setAttribute('type','number');
                    document.body.appendChild(sum);
                    sum.addEventListener('blur', () =>{
                        ccc = sum.value;
                        setTimeout(function() {
                            ccc = Number(sum.value);
                            if (aaa + bbb == ccc) {
                                document.location.href='correct.html';
                            }
                            else{
                                document.location.href='lose.html';
                            }
                        }, 1000);
                    });
                }
            });
        }
    });
    button.removeEventListener('click', createrElemsForFirst);
}
*/

// создание галлереи

/*
let button = document.getElementById('btn');
let body = document.querySelector('body');
let image = null;
let h2AfterImage = null;
let span = null;
let num = 0;
let br = '<br>';

function galleryCreate() {
    num++;
    let h1BeforeDiv = document.createElement('h1');
    h1BeforeDiv.textContent = 'Галлерея';
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'folder');
    document.body.appendChild(newDiv);
    body.insertBefore(h1BeforeDiv, newDiv);
    for (let i = 1; i < 5; i++) {
        span = document.createElement('span');
        h2AfterImage = document.createElement('h2');
        h2AfterImage.textContent = `Картинка ${i}`;
        image = document.createElement('img');
        image.setAttribute('src', `images/img${i}.jpg`);
        span.append(h2AfterImage);
        span.append(image);
        newDiv.append(span);
    }
    button.removeEventListener('click', galleryCreate);
}

button.addEventListener('click', galleryCreate);
*/


// списки прикола в 27 аудитории(Макс ушел за жижкой)


/*
let body = document.querySelector('body');
let button = document.getElementById('btn');
let min = document.getElementById('min');
let max = document.getElementById('max');
let list = null;
let point = null;
let del = null;
let aaa = 0;
let ranNumber = 0;

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function allAllAllAll(){
    if(Number(min.value) < Number(max.value)){
        ranNumber = randomizer(Number(min.value), Number(max.value));
        list = document.createElement('UL');
        for (let i = 1; i <= ranNumber; i++) {
            point = document.createElement('LI');
            del = document.createElement('a');
            del.textContent = "DELETE";
            point.textContent = `point${i} `;

//            point.addEventListener();

            del.addEventListener('click', ()=>{
                
            });
            point.append(del);
            list.append(point);
        }
        document.body.appendChild(list);
        button.removeEventListener('click', allAllAllAll);
    }
    else if(Number(min.value) > Number(max.value)){
        alert('ты даун');
    }
}

button.addEventListener('click', allAllAllAll);
*/
/*
let arr = ['page1.html', 'page2.html', 'page3.html'];
let body = document.querySelector('body');
let header = document.querySelector('nav');

let str = '';
for (let elem of arr) {
    let h1 = document.createElement('h1');
    str = elem.substring(4,5);
    h1.textContent = `${str} страница`;
    body.prepend(h1);
    let ssilka = document.createElement('a');
    ssilka.setAttribute('href', elem);
    ssilka.textContent = elem;
    header.appendChild(ssilka);
}
*/


//Лютое создание UL and LI чё за хуйня блять мне похуй крч лежать + сосать согл


/*
let score = 1;
let ul = document.querySelector('UL');
let arrLi = ['text', 'text', 'text', 'text', 'text'];

function addNewText() {//для добавления id в текст
    this.textContent += this.id;
    this.removeEventListener('click', addNewText);
}

function createrOfUl(event) {//функция добавления новых строк
    if (event.target.tagName !== "LI") {
        let li = document.createElement('LI');
        li.setAttribute('id', score);
        li.textContent = `text`;
        ul.append(li);
        li.addEventListener('click', addNewText);
        score++;
    }
}

for (let elem of arrLi) {//цикл создания строк
    let li = document.createElement('LI');
    li.textContent = elem;
    li.setAttribute('id', score);
    ul.append(li);
    li.addEventListener('click', addNewText);
    score++;
}

ul.addEventListener('click', createrOfUl);//добавление ивента нажания и последовательное срабатывание функции добавления новых строк
*/


