'use strict'
/*
let str = '<table border="1">';
let num = 0;
    
for (let i = 0; i <= 10; i++) {
    str += `<tr>`;
    for (let j = 1; j <= 10; j++){
        str += `<td>${num++}</td>`;
    }
    str += `</tr>`;
}
str += '</table>';
document.body.innerHTML = str;
*/
/*
let arr = [1,2,3,4,5,6];

let sum = 0;

for (let element of arr){
     sum+= element;
    }
console.log(sum);
*/
/*
let arr = {str1:777,str2:666,str3:333};
console.log(arr);
for (let elem in arr){
    let c;
    let s;
    c = arr[elem];
    s = elem;
    elem = c;
    arr[elem] = s;
}
console.log(arr);
*//*
let max = 10000;
for (let i = 1; i <= max; i++) {
    let g = String(i);
    if (g.length == 2)
    {
        if (Number(g[0]) == Number(g[1])){
            document.writeln(g + " ");
        }
    }

    if (g.length == 4){
        if (Number(g[0]) + Number(g[1]) == Number(g[2]) + Number(g[3])){
            document.writeln(g + " ");
        }
    }
}*//*
let g = 0;
let l = 0;
document.writeln("Числа нужные это: <br>");
for (let i = 1; i < 100; i++) {
    g += i;
    l++;
    document.writeln(l + "<br>");
    if (g>= 100){
        document.writeln("<br>" + l + " Чисел <br>");
        document.writeln(g + " Итоговое число");
        break;
    }
}
    *//*
let arr = [];
let arr2 = [];
for (let i = 1; i <= 100; i++) {
arr.push(i);
}
for (let elem of arr) {
if(elem%2==0)
{
arr2.push(elem);
}
else{ continue; }
}
console.log(arr);
console.log(arr2);
*//*
let num;
let flag = false;
prompt(num);
if (num % 2 === 1 && num % 3 === 1) {
    flag = true;
}
else {
    flag = false;
}


if (flag = true) { alert("Число простое"); }
else { alert("Число не простое"); }
*//*
let min1 = parseInt(prompt("Введи минимальное число"));
let max1 = parseInt(prompt("Введи максимальное число"));

function mathemat(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num = mathemat(min1, max1);

document.writeln(num);

let flag = true;

for (let i = 2; i < Number(num); i++) {

    if (Number(num) % i == 0) {
        flag = false;
        break;
    }

}

if (!flag) {
    document.writeln(" Не простое");
}
else {
    document.writeln(" Простое");



            if (arr[i] === str) {
            return true;
        }
        str = arr[i];
}*/

/*

25.09.2024 пара крч

function cor(array) {
    let str = 0;
    for (let elem of arr) {
        if (elem === str) {
            return true;
        }
        str = elem;
    }
    return false;
}
let arr2 = [1,2,3,4,5,6,6,7,8,9,10];
let flag = cor(arr2);
console.log(flag);*/
/*
let obj = {
    sum: function (arr = [111, 542, 3]) {
        let a = 0;
        for (arr in elem) {
            a += elem;
        }
        return a;
    },
    sq: function (arr = [111, 542, 3]) {
        let a = 0;
        for (arr in elem) {
            a += elem ** 2;
        }
        return a;
    },
    cube: function (arr = [111, 542, 3]) {
        let a = 0;
        for (arr in elem) {
            a += elem ** 3;
        }
        return a;
    }
}
let arrayXXXL = [111, 542, 3, 99, 80, 1];
function test(s, v, z) {
    let num = s + v + z;
    return num;
}
console.log(test(obj.sum(arrayXXXL), obj.sq(arrayXXXL), obj.cube(arrayXXXL)));*/
/*

let arrnum1 = [1,2,3,33,3,45,52,64,99,123];
let arrnum2 = [1,2,3,33,3,45,52,64,99,123];
let arrstr = ['edrh','hhh','ioi','eerrtt'];

function each(yyy){return yyy * 2;}

function func(arr, callback){
    for (arr in elem) {
        elem = callback(elem);
        console.log(elem);
    }
}

func(arrnum1,each);
let first = func(arrnum1,each());
document.writeln(func(arrnum1,each));*/
let minNum = 0;
let maxNum = 99;

function mathemat(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNum = mathemat(minNum, maxNum);
console.log(randomNum);