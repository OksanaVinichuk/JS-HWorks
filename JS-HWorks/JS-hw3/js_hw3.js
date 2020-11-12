// //1. -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу
// let dog = {
//     breed: 'Caucasian Shepherd Dog',
//     weight: {
//         Male: 'minimum 50 kg',
//         Female: 'minimum 45 kg'
//     },
//     height: {
//         Male: 'preferred 72–75 cm',
//         Female: 'preferred 67–70 cm'
//     },
//     coat: 'Straight, coarse, stand-off coat with well developed undercoat',
//     colour: 'Any solid colour, piebald or spotted colour, except liver, blue, and solid black',
//     lifeSpan: '10–12 years',
// };
// let me = {
//     name: 'Oksana',
//     surName: 'Vinichuk',
//     age: 34,
//     marriage: true,
//     childrens: 2,
// };
// let car = {
//     brand: 'Audi',
//     model: 'Audi 80',
//     production: 1989,
//     engine: 2.0,
//     bodyStyle: '4-door sedan',
//     transmission: '5-speed manual',
// };
// let apartment = {
//     type: 'flat',
//     rooms: 3,
//     floor: 8,
//     separateBathroom: true,
//     balcony: 2,
// };
// let book = {
//     author:	'E.L.James',
//     country: 'United Kingdom',
//     language:	'english',
//     genre:	'erotic romance',
//     Published:	2011,
//     filmAdaptation: true,
// };
// console.log(dog,me,car,apartment,book);
//
// // 2. -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// //     - з 5 людей
// //     - з 5 автомобілів
//     let dogs = ['Caucasian Shepherd Dog', 'Central Asia Shepherd Dog (Alabai)', 'Pyrenean Mastiff', 'Newfoundland', 'Alaskan Malamute'];
//     let people = ['men', 'women', 'baby', 'child', 'teenager'];
//     let cars = ['Nissan Petrol', 'Toyota Sequoia', 'Jeep(Cherokee)', 'BMW X5', 'Audi Q7'];
//     console.log(dogs);
//     console.log(people);
//     console.log(cars);

// // 3. -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// //   - будинок
// //   - водій
// //   - іграшку
// //   - стіл
// //   - сумка
// let dream = {
//     house: {
//         type: 'single-detached dwelling',
//         storey: 2,
//         garden: true,
//         rooms: 7,
//         garage: 'two cars garage',
//              },
//     driver: false,
//     toys: ['car', 'travel trailer', 'canoe'],
//     table: 'round',
//     bag: 'backpack',
// }
// console.log(dream);

// // 4. Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// // - статус Максима
// // - ім'я передостаннього об'єкту
// // - ім'я третього об'єкта
// // - вік Олега
// // - вік Олі
// // - вік + ім'я 5го об'єкта
// // - вік + сатус Анни
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].age + ', ' + users[4].name);
// console.log(users[5].age + ', ' + users[5].status);

// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// // 5. -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"
//     let content = document.getElementById('content');
//     console.log(content);
//
// // - отримує текст з блоку з id "rules"
//     let rules = document.getElementById('rules')
//     console.log(rules);
//
// // - замініть текст параграфа з id 'content' на будь-який інший
//      content.innerText = 'Lorem ipsum';
//      console.log(content);
//
// // - замініть текст параграфа з id 'rules' на будь-який інший
//     rules.innerText = 'Бійцівський Клуб'
//     console.log(rules);

// // - змініть кож>ному елементу колір фону на червоний
    let content = document.getElementById('content');
    let rules = document.getElementById('rules');
    let fcRules = document.getElementsByClassName('fc_rules');
//         content.style.backgroundColor = 'red';
//         rules.style.backgroundColor = 'red';
//     for (let i = 0; i < fcRules.length; i++) {
//         const fcRulesElement = fcRules[i];
//         fcRulesElement.style.backgroundColor = 'red';
//     }
//
// // - змініть кожному елементу колір тексту на синій
//     content.style.color = 'blue';
//     rules.style.color = 'blue';
//     for (let i = 0; i < fcRules.length; i++) {
//         fcRules[i].style.color = 'blue';
//         }

// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
//       console.log(rules.classList);
//
// // - отримати всі елементи з класом fc_rules
//       for (let i = 0; i < fcRules.length; i++) {
//       console.log(fcRules[i]);
// }

// - поміняти колір тексту у всіх елементів fc_rules на червоний

    for (let i = 0; i < fcRules.length; i++) {
        const fcRule = fcRules[i];
        fcRule.style.color = 'red';
    }



