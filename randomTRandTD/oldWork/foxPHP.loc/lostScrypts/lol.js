'use strict'


let minNum = 0;
let maxNum = 99;

function mathemat(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNum = mathemat(minNum, maxNum);
console.log(randomNum);
let score = 0;
let flag = true;
function ygodai(g) {
    let n = document.getElementById("number");
    if (n > g && n < 100 || n < g && n > -1) {
        alert("НЕ УГОДАЛ ХЫ ХЫ");
        score++;
        ygodai(g);
    }
    else if (n <= -1) {
        alert("Число слишком маленькое");
        score++;
        ygodai(g);
    }
    else if (n >= 100) {
        alert("Число слишком большое");
        score++;
        ygodai(g);
    }
    else {
        alert("вы угодали число за " + score + " попыток");
        score = 0;
        flag = confirm("Игра закончена, нажмите ОК если хотите ещё раз поиграть");
        if (flag)
            {   
                randomNum = mathemat(minNum, maxNum);
                console.log(randomNum);
                ygodai(randomNum);
            }
    }
}

ygodai(randomNum);
