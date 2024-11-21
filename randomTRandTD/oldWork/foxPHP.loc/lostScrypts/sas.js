'use strict'
/*
let array = [4, 16, 144, 25, 256];
let newArray = array.map(function (elem) { return Math.sqrt(elem); });
console.log("1 Задание :" + newArray);

let arrStr = ['jjj', 'hhh', 'gg', 'lol'];
let newStrArray = arrStr.map(function (elem) { return elem + "!"; });
console.log("2 Задание :" + newStrArray);

let arrStr2 = ['jjj', 'h2h1h', 'gg', 'lol'];
let newStrArray2 = arrStr2.map(function (elem) { return elem.split('').reverse().join(''); });//переворот строки
console.log("3 Задание :" + newStrArray2);

let arr = ['123', '456', '789'];
let newArr = arr.map(function (elem) { elem.split(''); });
console.log("4 Задание :" + newArr);
*/

//let array = [2, 41, 46, 8, 10];
/*let sum = 0;
array.forEach(elem => sum += elem ** 2);
console.log(sum);*//*
let score = 0;
let newArray = array.filter(elem, score => elem * score);
console.log(newArray);
let minNum = 0;
let maxNum = 99;*/

function mathemat(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNum = mathemat(minNum, maxNum);
console.log(randomNum);

