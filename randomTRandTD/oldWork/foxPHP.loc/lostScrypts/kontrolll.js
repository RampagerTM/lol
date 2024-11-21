'use strict'

/*
Задание 1
Дан массив чисел [6,2,4,8,3,9] С помощью метода map необходимо умножить каждый элемент в массиве на случайное число.

Задание 2
Дан массив объектов
arr = [
  { name: 'Ivanov', age: 25, salary: 15000 },
  { name: 'Petrov', age: 23, salary: 25000 },
  { name: 'Ignatov', age: 27, salary: 35000 },
];
С помощью метода reduce необходимо вычислить общий возраст всех пользователей в массиве объектов пользователей.

Задание 3
Дан массив чисел [-6,-2,4,8,-3,9] Напишите функцию, которая принимает массив чисел и с помощью метода foreach проверяет, содержит ли он хотя бы одно положительное число.
*/


document.writeln('<br><br>КОНТРОЛЬНАЯ<br>');
document.writeln('<br>1 Задание:');
let min = 1;
let max = 99;
let ranNum = Math.floor(Math.random() * (max - min + 1));
let arr = [6, 2, 4, 8, 3, 9];
arr = arr.map((num) =>  num * ranNum);

document.writeln(arr);

document.writeln('<br>2 Задание:');

let arr2 = [
    { name: 'Ivanov', age: 25, salary: 15000 },
    { name: 'Petrov', age: 23, salary: 25000 },
    { name: 'Ignatov', age: 27, salary: 35000 },
];

let ages = arr2.reduce((a, elem) => a += elem.age, 0);

document.writeln(ages);

document.writeln('<br>3 Задание:');
let arr3 = [-6, -2, 4, 8, -3, 9];

function Massiv(arr) {
    let flag = false;
    arr.forEach(elem => {
        if (elem > 0) {
            flag = true;
            return flag;
        }
    });
    return flag;
}
console.log(Massiv(arr3));

if (Massiv(arr3) === true) {
    document.writeln('True');
}
else {
    document.writeln('False');
}
