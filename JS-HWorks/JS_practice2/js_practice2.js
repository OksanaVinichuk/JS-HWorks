// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array1 = ['a', 'b', 'c'];
// for (i=1; i<=3 ; i+=1){array1.push(i)&&console.log(array1)}
//
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array2 = [1, 2, 3];
// console.log(array2.reverse());
//
// // 3. - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array3 = [1, 2, 3];
// array3.push(4);
// array3.push(5);
// array3.push(6);
// console.log(array3);
//
// // 4.- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array4 = [1, 2, 3];
// array4.unshift(4);
// array4.unshift(5);
// array4.unshift(6);
// console.log(array4);
//
// // 5. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array5=['js', 'css', 'jq'];
// console.log(array5.shift(1));
//
// // 6. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array6=['js', 'css', 'jq'];
// console.log(array5.pop(array6.length));
//
// // 7. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let array7 = [1, 2, 3, 4, 5];
// console.log(array7.slice(3, 5));
//
// // 8. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let array8 = [1, 2, 3, 4, 5];
// console.log(array8.slice(0, 2));
//
// // 9. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let array9 = [1, 2, 3, 4, 5];
// array9.splice(1, 2);
// console.log(array9);
//
// // 10. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let array10 = [1, 2, 3, 4, 5];
// array10.splice(3, 0, 'a', 'b', 'c');
// console.log(array10);
//
// // 11. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let array11 = [1, 2, 3, 4, 5];
// array11.splice(1,0,'a', 'b');
// array11.splice(6,0,'c');
// array11.splice(8,0,'e');
// console.log(array11);

// 12. - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numArr = [7, 12, 98, 37, 432, 482, 14, 77, 111, 3338];
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
        console.log(numArr[i]);
    }
}

// 13. - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let nulArr = [];
for (let i = 0; i < numArr.length; i++) {
    const numArrElement = numArr[i]; nulArr.push(numArrElement);
}
console.log(nulArr);

// 14. - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let null2Arr = [];
for (let i = 0; i < numArr.length; i++) {
    null2Arr[i] = numArr[i] ;
}
console.log(null2Arr);
