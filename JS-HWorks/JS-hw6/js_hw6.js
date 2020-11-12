// - создать массив с 20 числами.
const arrNumbers = [94, 7, 82, 12, 9, -4, 34, -90, 45, 2, 8, 17, -23, 14, 75, 377, -7777, 0, 55, 40];

                // // -- при помощи метода sort и колбека  отсортировать массив.
                // let arrSort = arrNumbers.sort((a, b) => a-b)
                // console.log(arrSort);

                // // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
                // let arrSort = arrNumbers.sort((a, b) => b-a)
                // console.log(arrSort);

                // // -- при помощи filter получить числа кратные 3
                // let f3NumArray = arrNumbers.filter(value => value % 3 === 0)
                // console.log(f3NumArray);

                // // -- при помощи filter получить числа кратные 10
                // let f10NumArray = arrNumbers.filter(value => value % 10 === 0)
                // console.log(f10NumArray);

// // -- перебрать (проитерировать) массив при помощи foreach()
// let fENumArray = arrNumbers.forEach(value => console.log(value));
//
            // // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
            // let mapNumArray = arrNumbers.map(value => value*3);
            // console.log(mapNumArray);

// // - создать массив со словами на 15-20 элементов.
const arrayOfWords = ['The', 'Ok10', 'Web', 'University', '2020-2021', 'java', 'QA', 'javaScript', 'phyton', 'language',
    'september 2020', 'HTML', 'CSS', 'array', 'string', 'number', 'function', 'loop', 'object', 'boolean'];

                    //  // -- отсортировать его по алфавиту в восходящем порядке.
                    // let sortWords = arrayOfWords.sort((a, b) => {
                    //     if (a.toLowerCase() > b.toLowerCase()) return 1;
                    //     if (b.toLowerCase() > a.toLowerCase()) return -1;
                    //     return 0;
                    //  })
                    // console.log (sortWords);

                    // // -- отсортировать его по алфавиту  в нисходящем порядке.
                    // let sortWordsArrray = arrayOfWords.sort((a, b) => {
                    //     if (a.toLowerCase() > b.toLowerCase()) return -1;
                    //     if (b.toLowerCase() > a.toLowerCase()) return 1;
                    //     return 0;
                    // })
                    // console.log (sortWordsArrray);

// // -- отфильтровать слова длиной менее 4х символов
// let filtrWords = arrayOfWords.filter(value => value.length < 4)
// console.log(filtrWords);

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mapWords = arrayOfWords.map (value => {
//     mapArray = [];
//     mapArray.push(value + '!');
//     return mapArray;
// })
// console.log(mapWords);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
    name: 'kolya',
    age: 29,
    status: true
}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
    name: 'anya',
    age: 31,
    status: false
}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
    name: 'masha',
    age: 30,
    status: true
}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];

let usersNew = JSON.parse(JSON.stringify(users));

// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// let usersAge1 = usersNew.sort((a, b) => a.age - b.age);
// console.log(usersAge1);

// let usersAge2 = usersNew.sort((a, b) => b.age - a.age);
// console.log(usersAge2);

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let uLength1 = usersNew.sort((a, b) => a.name.length-b.name.length);
// console.log(uLength1);
//
// let uLength2 = usersNew.sort((a,b) => b.name.length-a.name.length);
// console.log(uLength2);

                    // // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
                    // let uId = usersNew.map(value => {
                    //     value.id = Math.round(Math.random()*100);
                    //     return value
                    // })
                    // console.log(uId)

// // - відсортувати його за індентифікатором
// let uId = usersNew.map((value,index) => {
//     value.id = index*(Math.round(Math.random()*100));
//     return value
// })
// let uIdSort = uId.sort((a,b) => a.id - b.id)
// console.log(uIdSort)

// -- наисать функцию калькулятора с 2мя числами и колбеком
let calc = function (a,b) {
    result = a + b ; console.log(result);
}
calc(15, 15);
// -- наисать функцию калькулятора с 3мя числами и колбеком