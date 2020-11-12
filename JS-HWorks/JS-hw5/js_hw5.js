// // -  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// // - назва тегу
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результату
// // {
// //     titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/},
// // ]
// //
// // }
// // ==============================================

// function Attr (titleOfAttr, actionOfAttr) {
//     this.titleOfAttr = titleOfAttr;
//     this.actionOfAttr = actionOfAttr;
// }
// function Tag (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let hrefAttr = new Attr ('href','Задає адресу документа, на який слід перейти.');
// let targetAttr = new Attr ('target','Ім\'я вікна або фрейму, куди браузер буде завантажувати документ.');
// let titleAttr = new Attr ('title','Додає підказку до тексту посилання.');
//
// let a = new Tag ('<a>','є одним з важливих елементів HTML і призначений для створення посилань. Залежно від присутності атрибутів name або href тег <a> встановлює посилання або якір.',[ hrefAttr , targetAttr, titleAttr]);
//
// console.log(a);
//
// let classAttr = new Attr ('class','Визначає ім\'я класу, яке дозволяє зв\'язати тег зі стильовим оформленням.');
// let idAttr = new Attr ('id','Вказує ім\'я стильового ідентифікатора.');
// let styleAttr = new Attr ('style', 'Застосовується для визначення стилю елемента за допомогою правил CSS.');
//
// let div = new Tag ('<div>','Елемент <div> є блоковим елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту. Як правило, вид блоку управляється за допомогою стилів.',[ classAttr , idAttr, styleAttr]);
//
// console.log(div);
//
//
// let dirAttr = new Attr ('dir','Задає напрямок і відображення тексту - зліва направо або справа наліво.');
// let hiddenAttr = new Attr ('hidden','Приховує вміст елемента від перегляду.');
//
// let h1 = new Tag ('<h1>','Тег <h1> представляє собою найбільш важливий заголовок першого рівня. За замовчуванням, заголовок першого рівня відображається найбільшим шрифтом жирного накреслення, заголовки подальшого рівня за розміром менше.',[ dirAttr , hiddenAttr]);
//
// console.log(h1);
//
// let span = new Tag ('<span>','Тег <span> призначений для визначення малих елементів документа. За допомогою тега <span> можна виділити частину інформації всередині інших тегів і встановити для неї свій стиль.',[ classAttr , idAttr]);
//
// console.log(span);
//
// let nameAttr = new Attr('name','Ім\'я поля, призначене для того, щоб обробник форми міг його ідентифікувати.');
// let typeAttr = new Attr('type','Повідомляє браузеру, до якого типу належить елемент форми.');
// let valueAttr = new Attr('value', 'Значення елемента.')
//
// let input = new Tag('<input>','Тег <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців. Хоча елемент <input> не потрібно поміщати всередину контейнера <form>, що визначає форму, але якщо введені користувачем дані повинні бути відправлені на сервер, де їх обробляє серверна програма, то вказувати <form> обов\'язково.', [nameAttr , typeAttr, valueAttr] );
//
// console.log(input);
//
// let actionAttr = new Attr('action','Адреса програми або документа, який обробляє дані форми.')
// let autocompleteAttr = new Attr('autocomplete','Включає автозаповнення полів форми.')
//
// let form = new Tag('<form>','Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даними між користувачем і сервером. Область застосування форм не обмежена відправкою даних на сервер, за допомогою клієнтських скриптів можна отримати доступ до будь-якого елементу форми, змінювати його і застосовувати на власний розсуд.', [actionAttr, autocompleteAttr] );
//
// console.log(form);
//
// let labelAttr = new Attr('label','Вказівка мітки пункту списку.');
// let selectedAttr = new Attr('selected','Заздалегідь встановлює певний пункт списку виділеним.');
//
// let option = new Tag('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ', [labelAttr, selectedAttr, valueAttr] );
//
// console.log(option);
//
// let multipleAttr = new Attr('multiple','Дозволяє одночасно вибирати відразу кілька елементів списку.');
// let sizeAttr = new Attr('size','Кількість відображуваних рядків списку.');
//
// let select = new Tag('<select>','Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або множинним вибором, як показано далі. Кінцевий вигляд залежить від використання атрибута size тега <select>, який встановлює висоту списку. Ширина списку визначається самим широким текстом, зазначеним в тезі <option>, а також може змінюватися за допомогою стилів. Кожен пункт створюється за допомогою тега <option>, який повинен бути вкладений в контейнер <select>. Якщо планується відправляти дані списку на сервер, то потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.', [multipleAttr, sizeAttr] );
//
// console.log(select);

// // ==============================================
// //     -  Створити класс  для об'єкту який описує теги
// // Властивості
// // -назва тегу
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результату
// // {
// //     titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/},
// // ]
// //
// // }
// // ==============================================
//
// class Attr {
//     constructor(titleOfAttr, actionOfAttr) {
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;
//     }
// }
// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
// let hrefAttr = new Attr ('href','Задає адресу документа, на який слід перейти.');
// let targetAttr = new Attr ('target','Ім\'я вікна або фрейму, куди браузер буде завантажувати документ.');
// let titleAttr = new Attr ('title','Додає підказку до тексту посилання.');
//
// let a = new Tag ('<a>','є одним з важливих елементів HTML і призначений для створення посилань. Залежно від присутності атрибутів name або href тег <a> встановлює посилання або якір.',[ hrefAttr , targetAttr, titleAttr]);
//
// console.log(a);
//
// let classAttr = new Attr ('class','Визначає ім\'я класу, яке дозволяє зв\'язати тег зі стильовим оформленням.');
// let idAttr = new Attr ('id','Вказує ім\'я стильового ідентифікатора.');
// let styleAttr = new Attr ('style', 'Застосовується для визначення стилю елемента за допомогою правил CSS.');
//
// let div = new Tag ('<div>','Елемент <div> є блоковим елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту. Як правило, вид блоку управляється за допомогою стилів.',[ classAttr , idAttr, styleAttr]);
//
// console.log(div);
//
//
// let dirAttr = new Attr ('dir','Задає напрямок і відображення тексту - зліва направо або справа наліво.');
// let hiddenAttr = new Attr ('hidden','Приховує вміст елемента від перегляду.');
//
// let h1 = new Tag ('<h1>','Тег <h1> представляє собою найбільш важливий заголовок першого рівня. За замовчуванням, заголовок першого рівня відображається найбільшим шрифтом жирного накреслення, заголовки подальшого рівня за розміром менше.',[ dirAttr , hiddenAttr]);
//
// console.log(h1);
//
// let span = new Tag ('<span>','Тег <span> призначений для визначення малих елементів документа. За допомогою тега <span> можна виділити частину інформації всередині інших тегів і встановити для неї свій стиль.',[ classAttr , idAttr]);
//
// console.log(span);
//
// let nameAttr = new Attr('name','Ім\'я поля, призначене для того, щоб обробник форми міг його ідентифікувати.');
// let typeAttr = new Attr('type','Повідомляє браузеру, до якого типу належить елемент форми.');
// let valueAttr = new Attr('value', 'Значення елемента.')
//
// let input = new Tag('<input>','Тег <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців. Хоча елемент <input> не потрібно поміщати всередину контейнера <form>, що визначає форму, але якщо введені користувачем дані повинні бути відправлені на сервер, де їх обробляє серверна програма, то вказувати <form> обов\'язково.', [nameAttr , typeAttr, valueAttr] );
//
// console.log(input);
//
// let actionAttr = new Attr('action','Адреса програми або документа, який обробляє дані форми.')
// let autocompleteAttr = new Attr('autocomplete','Включає автозаповнення полів форми.')
//
// let form = new Tag('<form>','Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даними між користувачем і сервером. Область застосування форм не обмежена відправкою даних на сервер, за допомогою клієнтських скриптів можна отримати доступ до будь-якого елементу форми, змінювати його і застосовувати на власний розсуд.', [actionAttr, autocompleteAttr] );
//
// console.log(form);
//
// let labelAttr = new Attr('label','Вказівка мітки пункту списку.');
// let selectedAttr = new Attr('selected','Заздалегідь встановлює певний пункт списку виділеним.');
//
// let option = new Tag('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ', [labelAttr, selectedAttr, valueAttr] );
//
// console.log(option);
//
// let multipleAttr = new Attr('multiple','Дозволяє одночасно вибирати відразу кілька елементів списку.');
// let sizeAttr = new Attr('size','Кількість відображуваних рядків списку.');
//
// let select = new Tag('<select>','Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або множинним вибором, як показано далі. Кінцевий вигляд залежить від використання атрибута size тега <select>, який встановлює висоту списку. Ширина списку визначається самим широким текстом, зазначеним в тезі <option>, а також може змінюватися за допомогою стилів. Кожен пункт створюється за допомогою тега <option>, який повинен бути вкладений в контейнер <select>. Якщо планується відправляти дані списку на сервер, то потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.', [multipleAttr, sizeAttr] );
//
// console.log(select);


// // ==============================================
// // - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
//
// let car = {
//     model: 'A80',
//     manufacturer: 'Audi',
//     year: 1989,
//     maxSpeed: 130,
//     engine: '2.0',
//
//     //-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     drive: function () {
//         console.log (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//
// //-- info () - яка виводить всю інформацію про автомобіль
//         info: function () {
//             console.log(`model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             engine: ${this.engine}`)
//     },
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//
//     },
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear: function (newValue) {
//         this.year = newValue;
//
//     },
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//    addDriver: function (driver) {
//        this.driver = driver;
//
//        console.log(`model: ${this.model}
//         manufacturer: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         engine: ${this.engine}
//         driver: ${this.driver.name},${this.driver.age}`)
//    }
// }
//
// car.drive()
// car.info();
// car.info(car.changeYear(1998));
// car.info(car.increaseMaxSpeed(50));
//
// let Driver = {name:'Ivan', age:'37 years old'};
// car.addDriver(Driver);

// // ==============================================
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
//
// function Car (model,manufacturer,year,maxSpeed,engine){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     //-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//        this.drive = function () {
//         console.log (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
// //-- info () - яка виводить всю інформацію про автомобіль
//     this.info = function () {
//         console.log(`model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             engine: ${this.engine}`)
//     };
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//
//     };
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//
//     };
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//         console.log(`model: ${this.model}
//         manufacturer: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         engine: ${this.engine}
//         driver: ${this.driver.name},${this.driver.age}`)
//     }
// }
// let Driver = {name:'Ivan', age:'37 years old'};
//
// let myCar = new Car('A80','Audi',1989,130,'2.0');
//
// myCar.drive();
// myCar.info();
// myCar.changeYear(2000);
// myCar.increaseMaxSpeed(100);
// myCar.addDriver(Driver);

// // ==============================================
// //     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     //-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     drive () {
//         console.log (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
// //-- info () - яка виводить всю інформацію про автомобіль
//     info () {
//         console.log(`model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             engine: ${this.engine}`)
//     };
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//
//     };
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear (newValue) {
//         this.year = newValue;
//
//     };
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     addDriver (driver) {
//         this.driver = driver;
//
//         console.log(`model: ${this.model}
//         manufacturer: ${this.manufacturer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         engine: ${this.engine}
//         driver: ${this.driver.name},${this.driver.age}`)
//     }
// }
// let Driver = {name:'Ivan', age:'37 years old'};
//
// let myCar = new Car('A80','Audi',1989,130,'2.0');
//
// myCar.drive();
// myCar.info();
// myCar.changeYear(2000);
// myCar.increaseMaxSpeed(100);
// myCar.addDriver(Driver);

// // ==============================================
// //     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// // ==============================================
   class Cinderella {
    constructor(name, age, footSize) {
      this.name = name ;
      this.age = age ;
      this.footSize = footSize;
    }
    }
let kate = new Cinderella('Kate',18,35 );
let keri = new Cinderella('Keri',19,36 );
let linda = new Cinderella('Linda',19,38 );
let liusi = new Cinderella('Liusi',21,39 );
let magda = new Cinderella('Magda',19,37 );
let milena = new Cinderella('Milena',22,36 );
let meri = new Cinderella('Meri',18,37 );
let melisa = new Cinderella('Melisa',20,40 );
let rita = new Cinderella('Rita',18,39 );
let rose = new Cinderella('Rose',20,35 );

let arrayOfCinderellas = [kate, keri, linda, liusi, magda, milena, meri, melisa, rita, rose];

class Prince {
    constructor(name,age, shoe) {
        this.name = name ;
        this.age =  age;
        this.shoe = shoe;
    }
}
const prince = new Prince('Andi', 27, 37)

for (girl of arrayOfCinderellas)
    if (girl.footSize === prince.shoe) {
        console.log("My princess will be " + girl.name);
        break;
    }



// // ==============================================
// //     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// // ==============================================
//
// function Cinderella (name, age, footSize) {
//         this.name = name ,
//         this.age = age ,
//         this.footSize = footSize
//     }
//
// let kate = new Cinderella('Kate',18,35 );
// let keri = new Cinderella('Keri',19,36 );
// let linda = new Cinderella('Linda',19,38 );
// let liusi = new Cinderella('Liusi',21,39 );
// let magda = new Cinderella('Magda',19,37 );
// let milena = new Cinderella('Milena',22,36 );
// let meri = new Cinderella('Meri',18,37 );
// let melisa = new Cinderella('Melisa',20,40 );
// let rita = new Cinderella('Rita',18,39 );
// let rose = new Cinderella('Rose',20,35 );
//
// let arrayOfCinderellas = [kate, keri, linda, liusi, magda, milena, meri, melisa, rita, rose];
//
// function Prince (name,age, shoe) {
//         this.name = name ;
//         this.age =  age;
//         this.shoe = shoe;
//         this.findMyPrincess = function (array) {
//             findMyPrincess = null;
//             for (const girl of arrayOfCinderellas) {
//                 if (girl.footSize === this.shoe) {
//                     findMyPrincess = girl.name
//                 }
//             }
//             if (findMyPrincess !== null )
//                 { console.log("My princess will be " + findMyPrincess);}
//             else {console.log('I don\'t find my princess')}
//         }
// }
// const prince = new Prince('Andi', 27, 37)
//
// prince.findMyPrincess(arrayOfCinderellas);
//
