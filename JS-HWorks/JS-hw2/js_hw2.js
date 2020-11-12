// // 1. --створити масив та вивести його в консоль:
// //    - з 5 числових значень
// //    - з 5 стічкових значень
// //    - з 5 значень стрічкового, числового та булевого типу
// let numArray = [4, 27, 93, 34, 8];
// console.log(numArray);
// let strArray = ['Hello', 'cool', 'Okten', 'Web', 'University'];
// console.log(strArray);
// let someArray = ['javaScript', 'is', true, 'challenge', 2020];
// console.log(someArray);
//
// // 2. -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let newArray = [];
// newArray[0] = "Learn";
// newArray[1] = "JavaScript";
// newArray[2] = "for"
// newArray[3] = 6;
// newArray[4] = "months";
// console.log(newArray);
//
// // 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Text</div>')
// }
// ;
// // 4. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Text' + i + '</div>')
// }
// ;
// // 5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Lorem ipsum</h1>');
//     i++
// }
// // 6. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let j = 0;
// while (j < 20) {
//     document.write('<h1>Lorem ipsum' + j + '</h1>');
//     j++
// }
//
// // 7. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let tenArray = [2, 7, 54, 9, 12, 48, 3, 6, 10, 27];
// for (let i = 0; i < tenArray.length; i++) {
//     console.log(tenArray[i]);
// }
//
// // 8. - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringArray = ['Oksana', 'Andrii', 'Vlad', 'Orest', 'Liubov', 'Liubomyr', 'Hanna' , 'Mykola', 'Bohdan', 'Viktoriia'];
// for (let i = 0; i < stringArray.length; i++) {
//     console.log(stringArray[i]);}
//
// // 9. - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let allTypesArray = ['Oksana', 'Andrii', 'Vlad', 'Orest', 34 , 40, 8, 3, true, false];
// for (let i = 0; i < allTypesArray.length; i++) {
//     console.log(allTypesArray[i]);}
//
// // 10. - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (let j = 0; j < allTypesArray.length; j++) {
//     if (typeof allTypesArray[j] == "boolean")
//     { console.log(allTypesArray[j])}
// }
// // 11. - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let i=0; i<allTypesArray.length; i++) {
//     if (typeof allTypesArray[i] == "number")
//     {console.log(allTypesArray[i])}
// }
// // 12. - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let i=0; i<allTypesArray.length; i++) {
//     if (typeof allTypesArray[i] == "string")
//     {console.log(allTypesArray[i])}
// }
// // 13.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = "Okten";
// arr[1] = "Web";
// arr[2] = "University";
// arr[3] = true;
// arr[4] = 2020;
// arr[5] = false;
// arr[6] = "JavaScript";
// arr[7] = "programming";
// arr[8] = "new start";
// arr[9] = 2012;
// arr[10] = 2017;
// for (let i = 0; i < arr.length-1; i++) {
//     console.log(arr[i]);
// }
//
// // 14. - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<10;i+=1){
//     console.log(i), document.write(i+'<br>')
// }
// // 15. - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100;i+=1) {
//     console.log(i), document.write(i + '<br>');
// }
// // 16. - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<200;i+=2) {
//     console.log(i), document.write(i + '<br>');
// }
// // 17. - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i=0; i<100;i+=1) {
//     if (i % 2 == 0) {
//         console.log(i), document.write(i + '<br>');
//     }
// }
// // 18. - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i=0; i<100;i+=1) {
//     if (i % 2 == 1) {
//         console.log(i), document.write(i + '<br>');
//     }
// }

// // 19. - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let min = 0; min < 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log( min,'min', sec ,'sec');
//          }
//  }

// // 20. - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hours = 0; hours <= 2; hours++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(hours, 'hours', min, 'min', sec, 'sec');
//         }
//     }
// }
// Як зробити до 2 години 20 хвилини - упс(( .

// // Додатково
// // 1. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let dodArr = [ 'a', 'b', 'c'];
// let wordArr = [];
// for (let k = 0; k < dodArr.length; k++) {
//     wordArr=wordArr+dodArr[k];
// }
// console.log(wordArr);

// 2. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let dodArr = [ 'a', 'b', 'c'];
let wordArr = [];
let i=0;
while (i < dodArr.length)
{wordArr = wordArr+dodArr[i];i++}
console.log(wordArr);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
