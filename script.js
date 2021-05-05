"use strict";

// Урок 005
// let number = 5;
// const myName = 'Evgenii';

// number = 15;
// console.log(number);

// console.log(myName);

// Урок 006
// const persone = {
//    name: 'Ivan',
//    age: 25,
//    isMarried: false
// }

// alert(persone.name);

// let friendName = ['Alex', 'Danil', 'Vlad'];

// console.log(friendName[2]);

// Урок 007
// const answers = [];

// answers[0] = prompt('Погоняло?', '');
// answers[1] = prompt('Сколько лет?', '');
// answers[2] = prompt('Кто по жизни?', '');

// console.log(answers);
// console.log(typeof (answers));

// Урок 008 Интерполяция (ES6)
// const category = 'toys';
// console.log(`https://url.com/${category}/5`);

// const user = 69;
// alert(`Привет, ${user}`)
// console.log(typeof (user));

// Урок 009 Операторы
// И && true + false = false;
// Или || true + false = true;
// Отрицание != ;
// ++incr --decr ;
// == сравнение по значению/=== по значению + типу;

// Урок 010 Git и GitHub
// 1. git status;
// 2. git add - A;
// 3. git commit - a - m"comment";
// 4. git push;
// 5. git clone * link GitHub * newFolderName - скачать проект и создать новую папку на пк;
// 6. git pull - обновить файлы из репозитория;

//Урок 011 Пратика
const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
const lastFilm = prompt('Последний фильм?', '');
const lastFilmOcenka = +prompt('Оценка от 1 до 10', '');
const lastFilm1 = prompt('Последний фильм?', '');
const lastFilmOcenka1 = +prompt('Оценка от 1 до 10', '');


const personalMovieDb = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

personalMovieDb.movies[lastFilm] = lastFilmOcenka;
personalMovieDb.movies[lastFilm1] = lastFilmOcenka1;

console.log(personalMovieDb);