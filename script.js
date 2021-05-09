(function () {
   'use strict';
}());

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
// 5. git clone * link GitHub * newFolderName - скачать и создать новую папку;
// 6. git pull - обновить файлы из репозитория;

//Урок 012 Пратика

// const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
// const lastFilm = prompt('Последний фильм?', '');
// const lastFilmOcenka = +prompt('Оценка от 1 до 10', '');
// const lastFilm1 = prompt('Последний фильм?', '');
// const lastFilmOcenka1 = +prompt('Оценка от 1 до 10', '');


// const personalMovieDb = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    private: false
// };

// personalMovieDb.movies[lastFilm] = lastFilmOcenka;
// personalMovieDb.movies[lastFilm1] = lastFilmOcenka1;

// console.log(personalMovieDb);

//Урок 013 Условия

// const num = 50;

// if (num < 49) {
//    console.log('error');
// } else if (num > 51) {
//    console.log('too much');
// } else {
//    console.log('norm');
// }

//Условный (тернарный) оператор
// const num = 50;
// (num === 50) ? console.log('norm') : console.log('error');

// const num = 100;
// switch (num) {
//    case 49:
//       console.log('error');
//       break;
//    case 51:
//       console.log('error');
//       break
//    case 50:
//       console.log('Ok!');
//       break
//    default:
//       console.log('Совпадений нет');
//       break
// }

//Урок 014 Циклы while/do/for

// for (let i = 1; i < 10; i++) {
//    if (i === 5) {
//       continue;
//    }
//    console.log(i);
// }

// Урок 015 Практика2

// const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');

// const personalMovieDb = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    private: false
// };

// for (let i = 0; i < 2; i++) {
//    const lastFilm = prompt('Последний фильм?', ''),
//       lastFilmOcenka = +prompt('Оценка от 1 до 10', '');
// if (lastFilm != null && lastFilmOcenka != null && lastFilm != ''
// && lastFilmOcenka != '' && lastFilm.length < 50) {
//       personalMovieDb.movies[lastFilm] = lastFilmOcenka;
//       console.log('done');
//    } else {
//       console.log('error');
//       i--;
//    }
// }

// if (numberOfFilms < 10) {
//    alert('Чёт мало фильмов, лох');
// } else if (numberOfFilms > 10 && numberOfFilms < 30) {
//    alert('Уважаемый человек');
// } else if (numberOfFilms > numberOfFilms < 30) {
//    alert('Поздравляю, Вы задрот');
// } else {
//    alert('Ошиб_ОЧКА!');
// }

// console.log(personalMovieDb);

// Урок 018 Практика3

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
   while (numberOfFilms == '' || numberOfFilms == null ||
      isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
   }
}

start();

const personalMovieDb = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const lastFilm = prompt('Последний фильм?', ''),
         lastFilmOcenka = +prompt('Оценка от 1 до 10', '');
      if (lastFilm != null && lastFilmOcenka != null && lastFilm != '' &&
         lastFilmOcenka != '' && lastFilm.length < 50) {
         personalMovieDb.movies[lastFilm] = lastFilmOcenka;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

// rememberMyFilms();

function detectPersonalLvl() {
   if (numberOfFilms < 10) {
      alert('Чёт мало фильмов, лох');
   } else if (numberOfFilms > 10 && numberOfFilms < 30) {
      alert('Уважаемый человек');
   } else if (numberOfFilms > numberOfFilms < 30) {
      alert('Поздравляю, Вы задрот');
   } else {
      alert('Ошиб_ОЧКА!');
   }
}

// detectPersonalLvl();

function showMyDB() {
   if (personalMovieDb.private == false) {
      console.log(personalMovieDb);
   }
}

showMyDB();

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDb.genres[i - 1] = genre;
   }
}

writeYourGenres();