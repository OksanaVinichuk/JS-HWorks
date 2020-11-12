                                       // HTML-Events
// // 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// //    let div = document.createElement('div');
// //    div.id = 'text';
// //    div.innerText = '<p>Lorem ipsum dolor.</p>';
// //    document.body.appendChild(div);
// //    let btn = document.createElement('button');
// //    btn.onclick = () => {
// //         div.style.display = 'none';
// //
// //    }
//
// let divIdText = document.getElementById('text');
//   divIdText.innerText = 'lorem ipsum'
//   document.body.appendChild(divIdText);
//    divIdText.onclick = () => {
//     divIdText.style.display = 'none';
//  }
//
// // 2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.id = 'buttonHide';
// btn.innerText = 'Hide';
// document.body.appendChild(btn);
// btn.onclick = () => {
//     document.getElementById('buttonHide').style.display = 'none'
//  }

 // 3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
 //   з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.createElement('input');
input.id = 'age';
input.type = 'number';
document.body.appendChild(input);
let btnInput = document.createElement('button');
btnInput.innerText = 'confirm';
document.body.appendChild(btnInput);
btnInput.onclick = () => {
    if (input.innerText < 18 ) alert('Ваш вік менше 18 років');
    }


// - Создайте меню, которое раскрывается/сворачивается при клике
let itemsMenu = document.getElementsByName('li');
let menu = document.getElementById('myMenu');
                                       console.log(menu);
let btn = document.querySelector('#xxx');

                                       btn.onclick = () => {
    menu.classList.toggle('hide');
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
                                       



