//=============КЛАССНАЯ РАБОТА=================
let cars = [{
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400
}, {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250
}, {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300
}, {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140
}, {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200
}, {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165
}, {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350
}, {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400
}, {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230
}];


// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let carsVolum = cars.filter(value => value.volume > 3);
// console.log(carsVolum);

// // - двигун = 2л
// let carsVolum2 = cars.filter(value => value.volume === 2);
// console.log(carsVolum2);

// // - виробник мерс
// let carsMersedes = cars.filter(value => value.producer ==="mercedes");
// console.log(carsMersedes);

// // - двигун більше 3х літрів + виробник мерседес
// let cars3lMers = cars.filter( value => value.volume > 3 && value.producer === "mercedes");
// console.log(cars3lMers);

// // - двигун більше 3х літрів + виробник субару
// let cars3lSubaru = cars.filter(value => value.volume > 3 && value.producer === "subaru");
// console.log(cars3lSubaru);

// // - сили більше ніж 300
// let carsPower = cars.filter(value => value.power>300);
// console.log(carsPower)

// // - сили більше ніж 300 + виробник субару
// let carsPowerSubaru = cars.filter(value =>
//     value.power > 300 && value.producer === "subaru")
// console.log(carsPowerSubaru)

// // - мотор серіі ej
// let carsSerii = cars.filter(value => value.engine.includes('ej'))
// console.log(carsSerii);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let carsSerii = cars.filter(value => value.power > 300 && value.producer === "subaru" && value.engine.includes('ej') )
// console.log(carsSerii);

// // - двигун меньше 3х літрів + виробник мерседес
// let cars3lMers = cars.filter(value => value.volume < 3 && value.producer === "mercedes" )
// console.log(cars3lMers);

// // - двигун більше 2л + сили більше 250
// let cars2lPower = cars.filter( value => value.volume > 2 && value.power > 250 )
// console.log(cars2lPower);

// // - сили більше 250  + виробник бмв
// let cars250bmw = cars.filter(value => value.power > 250 && value.producer === "bmw");
// console.log(cars250bmw);

// - взять слдующий массив
let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 16}
}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}];

// // -- отсортировать его по id пользователей
// let addrIdSort1 = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(addrIdSort1);

// // -- отсортировать его по id пользователей в обратном
// let addrIdSort2 = usersWithAddress.sort((a, b) => b.id - a.id)
// console.log(addrIdSort2);

// // -- отсортировать его по возрасту пользователей
// let addrSortAge1 = usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(addrSortAge1);

// // -- отсортировать его по возрасту пользователей в обратном порядке
// let addrSortAge2 = usersWithAddress.sort((a, b) => b.age-a.age)
// console.log(addrSortAge2);

// // -- отсортировать его по имени пользователей
// let addrSortName1 = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
//     return 0;
// })
// console.log(addrSortName1);

// // -- отсортировать его по имени пользователей в обратном порядке
// let addrSortName2 = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) return -1;
//     if (a.name < b.name) return 1;
//     return 0;
// })
// console.log(addrSortName2);

// // -- отсортировать его по названию улицы  в алфавитном порядке
// let addrSortStreet = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) return 1;
//     if (a.address.street < b.address.street) return -1;
//     return 0;
// })
// console.log(addrSortStreet);

// // -- отсортировать его по номеру дома по возрастанию
// let addrSortNumber = usersWithAddress.sort((a, b) => a.address.number-b.address.number)
// console.log(addrSortNumber);

// // -- отфильтровать (оставить) тех кто младше 30
// let addrFilrtAge = usersWithAddress.filter(value => value.age < 30)
// console.log(addrFilrtAge);

// // -- отфильтровать (оставить) тех у кого отрицательный статус
// let addrFilrtStatus = usersWithAddress.filter(value => value.status === false)
// console.log(addrFilrtStatus);

// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let addrFilrtStatusAge = usersWithAddress.filter(value => value.status === false && value.age < 30)
// console.log(addrFilrtStatusAge);

// // -- отфильтровать (оставить) тех у кого номер дома четный
// let addrFilrtNumber2 = usersWithAddress.filter(value => value.address.number % 2 === 0)
// console.log(addrFilrtNumber2);
