//1. - створити функцію яка виводить масив
// function fArray(arr){
//     console.log(arr);
//  }
//  fArray([11,12,13,14,15]);

// // 2. - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomNumers(length){
//     const array = [];
//     for(let i=0; i<length; i++) {
//         array.push(Math.random())
//     }
//     return array;
// }
//
// farray(randomNumers(7));
//
// // 3. - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minFromThree(a, b, c) {
//     let min;
//     if ( a <= a && a <=c ) min = a;
//     if ( b <= a && b <=c ) min = b;
//     if ( c <= a && c <=b ) min = c;
//     console.log ('min', min);
//     return min;
// }
//
// let min = minFromThree(15,7,1);
// console.log (min);
//
// // 4. - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function maxFromThree(k,l,m) {
//     let max = k ;
//     if ( l >= k && l >= m ) max = l;
//     if ( m >= k && m >= l ) max = m;
//     console.log('max=', max);
//     return (max);
// }
//
// const max = maxFromThree(43,6,55)
// console.log(max);

// // 5. - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function fMinMax(array) {
//     let minValue = array[0];
//     let maxValue = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//         if (minValue > array[i]) {
//             minValue = array[i]
//         }
//         if (maxValue < array[i]) {
//             maxValue = array[i];
//         }
//
//     }
//     console.log ('max', maxValue);
//     return (minValue);
// }
// const minValue = fMinMax([12,554,5,56,-121]);
// console.log('min', minValue);

// // 6. - створити функцію яка виводить масив
//     function fArray(arr) {
//         console.log(arr);
//     }
// fArray([12,22,6,-2135,5]);

// // 7. - створити функцію яка повертає найбільше число з масиву
// function fReturnMax(arr) {
//     let maxValue = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(maxValue < arr[i]) {
//             maxValue = arr[i]
//         }
//     }
//     return(maxValue);
// }
//
// console.log(fReturnMax([12,5,78,221,9,45]));

// // 8. - створити функцію яка повертає найменьше число з масиву
//
// function fRuturnMin(arr) {
//     let minValue = arr[0];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] < minValue) {
//             minValue = arr[i]
//         }
//     }
//     return minValue;
// }
//
// console.log('min', fRuturnMin([12, -7, 99, 15, 67, -4, 75]));
// //
// // 9. - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function fArraySumEl(arr) {
//     let sumEl = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         sumEl = sumEl + arr[i]
//     }
//     return sumEl;
// }
// console.log('The result of sum elements is', fArraySumEl([12, -7, 0, 15, 67, -4, 75]));

// // 10. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function fSerAryphEl(arr) {
//     let serAryphEl=0 ;
//     let sumaEl=0;
//     for (let i = 0; i < arr.length; i ++) {
//         sumaEl = sumaEl + arr[i]
//     }
//
//      return (serAryphEl = sumaEl/(arr.length));
// }
// console.log('Середнє арифметичне значеннь масиву ', fSerAryphEl([12, -7, 0, 5, 67, -4, 75]));
//
// // 11. - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function arrayOfObjects(arr){
//     let count=0;
//     for (const element of arr) {
//         if (typeof (element) === 'object' && !Array.isArray(element))
//         count++;
//     }
//     return count;
// }
// console.log(arrayOfObjects([{name: 'Vlad', age:8, skill:'programming'}, [1, 2], {name:'Orest', age: 3}, 1, 's']));
//

// // 12. - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function countFilds(arr){
    let countFilds = 0;
    for (const element of arr) {
        if (typeof element === 'object' && !Array.isArray(element)) {
            for (const Key in element)
            {countFilds ++}
        }
    }
    return countFilds;
}
    console.log(countFilds([{name: 'Vlad', age:8, skill:'programming'}, [1, 2], {name:'Orest', age: 3}, 1, 's']));

// 13. - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад:   [1,2,3,4] [2,3,4,5]  результат  [3,5,7,9]

function sumElSomeIndex(arr1,arr2) {
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
        resultArray[i]= arr1[i] + arr2[i];
    }
    return resultArray;
}
console.log (sumElSomeIndex ([1,2,3,4],[2,3,4,5]));