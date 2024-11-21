'use strict'

//задавание переменных

let min = document.getElementById('minNum');
let max = document.getElementById('maxNum');
let okay = document.getElementById('kokkk');
let form = document.querySelector('form');
let timer = document.getElementById('timer');
let body = document.querySelector('body');
let restart = document.getElementById('return');
let seconds = document.getElementById('seconds');
let ranNum = 0;
let score = 1;
let nnn = 0;
let aaa = 0;
let arrayForRanIns = [0];
let arrayForColors = ['red', 'green', 'purple', 'yellow', 'magenta', 'bisque', 'chartreuse', 'royalblue', 'peachpuff'];
let boolForIns = false;
let timeScore = null;
let timmer = null;

//функции


function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function endGame() {
    timmer = clearInterval(timeScore); //console.log(timer.innerHTML);
    timer.innerHTML = "ура победа, хотите поиграть ещё раз?";
    score = 1;
    arrayForRanIns = [0];
    restart.style.display = 'inline';
}

function endTimer() {
    setTimeout(() => {
        endGame();
        timer.innerHTML = 'вы проиграли';
        if(timer.innerHTML == "ура победа, хотите поиграть ещё раз?"){
            endTimer();
        }
    }, Number(seconds.value) * 1000);
}


function reversAllGame() {
    body.removeChild(document.getElementById('table'));
    form.style.display = 'inline';
    restart.style.display = 'none';
    timer.innerHTML = 'привет снова';
}

function tablesCrafter(num) {
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    for (let i = 0; i < num; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < num; j++) {
            let td = document.createElement('td');
            td.textContent = rondomInsert();
            td.addEventListener('click', () => {
                if (td.textContent == score) {
                    if (arrayForColors.includes(td.style.backgroundColor) == false) {
                        score++;
                        td.style.backgroundColor = arrayForColors[randomizer(0, arrayForColors.length-1)];
                        td.style.fontSize = `${randomizer(20,50)}px`;
                        td.style.fontWeight = `${Math.floor(randomizer(3,7)) * 100}`;
                    }
                    if (score - 1 == ranNum * ranNum) {
                        endGame();
                    }
                }
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function rondomInsert() {
    nnn = ranNum * ranNum;
    while (true) {
        aaa = randomizer(1, nnn);
        if (arrayForRanIns.includes(aaa) == false) {
            arrayForRanIns.push(aaa);
            return aaa;
        }
    }

}



//скрипт

okay.addEventListener('click', () => {
    if (Number(min.value) <= Number(max.value)) {
        timer.textContent = String(seconds.value);
        form.style.display = 'none';
        timeScore = setInterval(() => {
            timer.innerHTML = Number(timer.innerHTML) - 1;
        }, 1000);
        ranNum = randomizer(Number(min.value), Number(max.value));
        tablesCrafter(ranNum);
        endTimer();
    }
    else if (Number(min.value) > Number(max.value)) {
        alert('введи нормально олух');
    }
});

restart.addEventListener('click', () => reversAllGame());
