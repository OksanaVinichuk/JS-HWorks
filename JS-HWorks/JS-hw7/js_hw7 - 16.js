// HTML-Events

// 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const idText = document.getElementById('text');
let el = document.createElement('p');
    el.id = 'text';
    el.innerText = 'Div-ка з id text ';
    el.style.cursor = 'pointer';
    el.onclick = () => {
    el.style.display = 'none';
}
idText.appendChild(el);

// 2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const buttonHide = document.getElementById('buttonHide');
let btnHide = document.createElement('button');
    btnHide.innerText = ' Hide yourself ';
    buttonHide.appendChild(btnHide);
    btnHide.onclick = () => btnHide.style.display = 'none';

// 3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//   з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const ageInput = document.getElementById('ageInput');
let age = document.createElement('input');
    age.type = 'number';
let btnInput = document.createElement('button');
    btnInput.innerText = 'Confirm';
ageInput.appendChild(age);
ageInput.appendChild(btnInput);
btnInput.onclick = () => {
if (age.value < 18 && age.value >= 0) alert('Ваш вік менший 18 років');
if (age.value > 18 && age.value <= 120) alert('Ваш вік більший 18 років');
if (age.value > 120 || age.value < 0) alert('Вік вказано не вірно')
}

// 4. - Создайте меню, которое раскрывается/сворачивается при клике
let menuItems = document.getElementById('menuItems');
let menu = document.querySelector('#xxx');
menu.onclick = () => {
    menuItems.classList.toggle('hide');
}

// 5. - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//      Добавьте каждому комментарию по кнопке для сворачивания его body.
const divComments = document.getElementById('divComments');
let arrayOfComments = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
]
  arrayOfComments.forEach(value => {
      let comment = document.createElement('div')
      let titleComment = document.createElement('h4');
      let bodyComment = document.createElement('p');
      let btnHideComment = document.createElement('button');
      comment.style.border = '1px solid black';
      comment.style.width = '350px'
      btnHideComment.innerText = 'Hide';
      titleComment.innerText = value.title;
      bodyComment.innerText = value.body;
      comment.appendChild(titleComment);
      comment.appendChild(bodyComment);
      comment.appendChild(btnHideComment);
      divComments.appendChild(comment);
      btnHideComment.onclick = () => bodyComment.classList.toggle('hide')
  })

// 6. - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const divForms = document.getElementById('divForms');
let form1 = document.getElementById('f1');
let form2 = document.getElementById('f2');
let input1 = document.getElementsByName('input1');
let input2 = document.getElementsByName('input2');
let input3 = document.getElementsByName('input3');
let input4 = document.getElementsByName('input4');

let btn = document.createElement('button');
btn.innerText = 'display on consol'
divForms.appendChild(btn);
btn.onclick = () => {
    console.log(document.forms.form1.input1.value + ' '+ document.forms.form1.input2.value);
    console.log(form2.input3.value + ' '+ form2.input4.value);
}

// 7. - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
let tableTask = document.getElementById('tableTask');
function table(tableRows, tableColums, tablePlace) {
    const table = document.createElement('table');
    table.style.border = '1px solid blue';
    tablePlace.appendChild(table);
    for (let i = 0; i < tableRows; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < tableColums; j++) {
            const td = document.createElement('td');
            td.innerText = 'text' + i;
            tr.appendChild(td);
        }
    }
}
table(7, 3, tableTask);

// 8. - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const tableContent = document.getElementById('createTable');
let inp1 = document.createElement('input');
let inp2 = document.createElement('input');
let inp3 = document.createElement('input');
let btnCreateTable = document.createElement('button');
btnCreateTable.innerText = 'Create a Table';
inp1.type = 'number';
inp2.type = 'number';
inp3.type = 'text';
tableContent.appendChild(inp1);
tableContent.appendChild(inp2);
tableContent.appendChild(inp3);
tableContent.appendChild(btnCreateTable);

function fCreateTable(tRows, tColums, element) {
    const newTable = document.createElement('table');
    tableContent.appendChild(newTable);
    newTable.style.border = '1px solid blue';
    for (let i = 0; i < tRows; i++) {
        const tr = document.createElement('tr');
        newTable.appendChild(tr);
        for (let j = 0; j < tColums; j++) {
            const td = document.createElement('td');
            td.innerText = element + i + j;
            tr.appendChild(td);
        }
    }
}

btnCreateTable.onclick = () => fCreateTable(input1.value, input2.value, input3.value);

// 11. -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
const content = document.getElementById('content');
const wrap = document.getElementById('wrap');
const arrayOfH2 = document.getElementsByName('h2');
let ul = document.createElement('ul');
for (let i = 0; i < arrayOfH2.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    let punktZaholovku = 'punktZaholovku' + i;
    a.href = '#' + punktZaholovku;
    arrayOfH2[i].setAttribute('id', 'punktZaholovku');
    a.innerHTML = arrayOfH2[i].innerText;

    li.appendChild(a);
    ul.appendChild(li);
}
content.appendChild(ul);
content.style.width = '25%';
wrap.style.width = '75%';
content.style.float = 'left';
wrap.style.float = 'left';

// 12. -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const checkBoxes = document.getElementById('checkBoxes');
const status = document.getElementById('status');
const eldest29 = document.getElementById('eldest29');
const kyiv = document.getElementById('kyiv');
let resultOfCheckbox = document.createElement('p')
    checkBoxes.appendChild(resultOfCheckbox)


 status.onclick = () => {  status.checked;
      let filterStatus = usersWithAddress.filter(item => item.status === false)
         resultOfCheckbox.innerText = JSON.stringify(filterStatus) ;
}
eldest29.onclick = () => {eldest29.checked;
    let filterEldest29 = usersWithAddress.filter( item => item.age>=29 )
    resultOfCheckbox.innerText = JSON.stringify(filterEldest29)
};
kyiv.onclick = () => {kyiv.checked;
    let filterKyiv = usersWithAddress.filter( item => item.address.city ==="Kyiv")
    resultOfCheckbox.innerText = JSON.stringify(filterKyiv)
}



// if (status.checked == true){
//     let filterStatus = usersWithAddress.filter(item => item.status === false)
//     resultOfCheckbox.innerText = JSON.stringify(filterStatus) ;
//     filterStatus.style.display = "block";
// } else {
//     filterStatus.style.display = "none";}
//
// if (eldest29.checked == true){
//     let filterEldest29 = usersWithAddress.filter( item => item.age>=29 )
//     resultOfCheckbox.innerText = JSON.stringify(filterEldest29) ;
//     filterEldest29.style.display = "block";
// } else {
//     filterEldest29.style.display = "none";}
//
// if (kyiv.checked == true){
//     let filterKyiv = usersWithAddress.filter( item => item.address.city ==="Kyiv")
//     resultOfCheckbox.innerText = JSON.stringify(filterKyiv)
//     filterKyiv.style.display = "block";
//     }
// else { filterKyiv.style.display = "none"}
