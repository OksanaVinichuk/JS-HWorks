// // 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// // При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//     let str = 'Привіт';
//     let num = 123;
//     let flag = true;
//     let txt = 'true';
//     alert(typeof(str));
//     alert(typeof(num));
//     alert(typeof(flag));
//     alert(typeof(txt));
// // 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// // 5 + 3, 5 - 3, 5 * 3, 5 / 3, 5 % 3 поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//      let a1 = 5 + 3;
//      let a2 = 5 - 3;
//      let a3 = 5 * 3;
//      let a4 = 5 / 3;
//      let a5 = 5 % 3;
//      console.log(a1);
//      console.log(a2);
//      console.log(a3);
//      console.log(a4);
//      console.log(a5);
// //3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     let a6 = 5 % 3;
//     let a7 = 3 % 5;
//     let a8 = 5 + '3';
//     let a9 = '5' - 3;
//     let a10 = 75 + 'кг';
//     console.log(a6);
//     console.log(a7);
//     console.log(a8);
//     console.log(a9);
//     console.log(a10);
// //4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// //   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
//     let height = 23;
//     let width = 10;
//     let s = height * width;
//     console.log(s);
//
// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.
//     let heightC = 10;
//     let dC = 4;
//     const pi = 3.1415;
//     let v = pi * Math.pow(dC/2,2) * heightC;
//     console.log(v);
//
// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// // Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//     let n = 3;
//     let m = 4;
//     let k = ( n**2 + m**2 ) ** 0.5;
//     console.log(k);
// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//     let greet = "Hello world";
//     document.write(greet + "<br/>");
//     alert(greet);
//     console.log(greet);
//
// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//     alert('Вінічук О.Л.'+'\n'+'34р'+'\n'+'programming');
//
//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
    let str1 = 'Хто';
    let str2 = 'ти';
    let str3 = 'такий?';
    let concatenation = str1+' '+ str2+' '+ str3;
    document.write(concatenation + "<br/>");

//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";                       //// expected output: 20
//     let a = 5;                            //// expected output: 5
//     document.write(str + a + "<br/>");    //// expected output: 205 ('20' + 5)
//     document.write(str - a + "<br/>");    //// expected output: 15  (20 - 5)
//     document.write(str * "2" + "<br/>");  //// expected output: 40  (20 * 2)
//     document.write(str / 2 + "<br/>");    //// expected output: 10  (20 / 2)

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    console.log(parseInt("3.14"));
    console.log(parseInt("-7.875"));
    console.log(parseInt("435"));
    console.log(parseInt("Вася"));

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    let str = prompt("Enter something", "ho-ho")
    console.log(str);