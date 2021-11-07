//Условия ветвления

//Задание №1

// let name = prompt("Какое «официальное» название JavaScript?")

// if(name == 'ECMAScript'){
//     alert('Верно')
// }else{
//     alert('Не знаете? ECMAScript')
// }

//Задание №2

// let value = prompt("Введите пожалуйста число!")
// if(value > 0){
//     alert(1)
// }else
// if(value < 0){
//     alert(-1)
// }else{
//     alert(0)
// }

//Задание №3
// let result = (a + b < 4) ? "мало" : "много";

//Задание №4
//  let message =
//  login == 'Сотрудник'? 'Привет' :
//  login == 'Директор'? 'Здравствуйте' :
//  login = ''? 'нет логина' :
//  '';

//--------------------------------------------------------------------------

//Типы данных

// let nember = 7;
// let nember1 = 7.5;
// let nember2 = Infinity;
//  alert('пять'*2)

//  let bigInt = 1553155531353553155222225487822n
//  alert(bigInt)

// let name = 'Cavliuc Igor'
// alert(`привет ${name}`)

// alert(15>Infinity)
// alert(0=0)

// let age;
// let age1 = age;
// age1 = undefined;
// alert(age1)

// let object = {
//     name: 'Igor',
//     age: 21,
//     sex: 'man',
//     city: 'Tiraspol'
// }
// alert(object.name)

// ---------------------------------------------------------------------

//Преобразование  типов

// let number = '2554.54'
// number = Number(number)
// alert(typeof number)

// let age = Number('true')
// alert(age)

// let age = Number(true)
// alert(age)

//-----------------------------------------------------------------

//Числа

//Задача №1

// let number1 = prompt('Введите число')
// let number2 = prompt('Введите число')
// alert(+number1 + +number2)

//Задача №2

// alert( 1.35.toFixed(1) )
// alert( Math.round(6.35 * 10) /10)

//Задача №3

// const  userExam = () =>{
//  let userkey;
//   do{
//       userkey = prompt('please write number')
//   }while (!isFinite(userkey))

//   if(userkey === null || userkey === ''){
//       return null
//   }else{
//       return +userkey
//   }

// }

// alert(userExam())

//Задача №4

// let i = 0;
// do{
//     i += 0.2;
// }
// while (i < 9.8) {
//     //Почему после обьявления переменной, число все равно увеличивается?
// }
// alert(i)

//Задача №5

// const random=(min, max)=>{
//     return Math.random() * (max - min) + min
// }
// console.log(random(4, 5))

//Задача №6

// const randomInteger =(min, max)=>{

//     return Math.floor(Math.random() * (max - min) + min)
// }
// console.log(randomInteger(1, 10))

//-------------------------------------------------------------------

//Шаблонные строки

//  let name = 'Igor'
//  console.log(`Привет ${name}`)

//console.log(`Сумма чисел ровна: ${4+5}`)

//  let text = `Привет
//  это текст,
//  разбитый на несколько строк`

//  console.log(text)

// let numString = '215';
// let num = 215;
// console.log(numString + num)

// console.log(`'JavaScipt' - язык программирования`)

// let text = 'Hello'
// console.log(text.length)
// console.log(text[0])

// console.log(`Привет!\n\t Я изучаю \n\t\t JavaScript`)

//-----------------------------------------------------------------------

//Дата и время

//Задача №1

// console.log(new Date(2012, 1, 20, 03, 12))

//Задача №2
// let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

// let day = new Date(2012, 1, 20, 03, 12)
// let getWeekDay = day.getDay()

// console.log(days[getWeekDay])

//Задача №3
// let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

// let day = new Date(2012, 1, 20, 03, 12)
// let getWeekDay = day.getDay()
// if(getWeekDay == 0){
//     getWeekDay ==7
// }

// console.log(days[getWeekDay])

//Задача №4

// const getDateAgo =(date, days)=>{
//    let datecopy = new Date(date)
//  //почему нельзя изменять new Date?
//    datecopy.setDate(date.getDate() - days)
//    return datecopy.getDate()
// }

// let date = new Date(2021,10,6)
// console.log(getDateAgo(date, 2))

//Задача №5

// const getLastDayOfMonth = (year, month) => {
//     let date = new Date(year, month + 1, 0)

//0 в параметре дня отвечает за последнее число, а не за первое

//     return date.getDate()
// }

// console.log(getLastDayOfMonth(2021,10))

//Задача №6

// const getSecondsToday = () =>{
//     let now = new Date()

//     let dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     let dayEnd = new Date()

//     return Math.round((dayEnd - dayStart)/1000)
// }

// console.log(getSecondsToday())

//Задача №7

// const getSecondsToday = () =>{
//     let now = new Date()

//     let dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     let dayEnd = new Date()
//     let total = 86400;

//     return Math.round(86400 - (dayEnd - dayStart)/1000 )
// }

// console.log(getSecondsToday())

//Задача №8

// const formatDate = (date) =>{
//     let date1= new Date()

//     let totalData = (date1.getTime() - date.getTime())/1000;
//     if(totalData < 1){
//         return 'Был в сети только что'
//     }else
//     if(totalData < 60){
//         return `Был в сети ${Math.round(totalData)} секунд назад`
//     }else
//     if(totalData < 3600){
//         return `Был в сети ${Math.round((totalData) / 60)} минут назад`
//     }else{
//         return `Был в сети ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

//     }
//     console.log(totalData)
// }

// console.log(formatDate(new Date(2021, 10, 7, 16, 05, 15)))

//-------------------------------------------------------------------

//Console

// console.log('JavaScript log')
// console.error('Error')
// console.warn('Warning!!')
// console.info('JavaScript info')

// let object = {
//     a: {
//         name:'Igor',
//         age: 20,
//     },
//     b: {
//         name:'Alex',
//         age: 25,
//     }
// }

// console.log(object)
// console.table(object)
// console.table(object, ['name'])

//-------------------------------------------------

//Базовые операторы

// let a = 1, b = 1;

// let c = ++a; // ? префикс
// let d = b++; // ? постфикс

// console.log(c) // вернет новое значение 2
// console.log(d) // вернет старое значение 1

//Задача №1
// let a = 2;

// let x = 1 + (a *= 2); //а - умножается на 2 и присваевается новое значение.  x = 1 + a (4)

// console.log(a)
// console.log(x)

//Задача №2

// "" + 1 + 0      // '10' ("" делает из 1 строку)
// "" - 1 + 0      // -1 ("" = 0)
// true + false    // 1 (1+0)
// 6 / "3"         // 2
// "2" * "3"       // 6 строка меняется на число
// 4 + 5 + "px"    // '9px'
// "$" + 4 + 5     // '$45'
// "4" - 2         // 2
// "4px" - 2       // NaN - нет первого числа
// 7 / 0           //Infinity
// "  -9  " + 5    //    -9    5  соединение со строкой
// "  -9  " - 5    // -14   вычитание делает строку числом
// null + 1        //  1
// undefined + 1   // NAN
// " \t \n" - 2    // -2

//Задача №3

//нужно добавить +
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 12

//-----------------------------------------------

//Таблица приоритетов

// console.log(3 + 4 * 5); // 3 + 20
// console.log(4 * 3 ** 2); // 4 * 9
// console.log(3*2**4) //3*16

//-----------------------------------------------

//Логические операторы

//alert( null || 2 || undefined ); //false || true (остановлено)

//alert( alert(1) || 2 || alert(3) ); //alert(1) == false, поэтому возвращаем 2

//alert( 1 && null && 2 ); // null потому что есть один false

//alert( alert(1) && alert(2) ); // не возвратит значение

//alert( null || 2 && 3 || 4 ); // && имеет больший преоритет, 3 > 2 (3)

// let age = 20;

// if(age >=14 && age <=90 ){
// console.log(true)
// }else{
//     console.log(false)
// }



// let age = 13;

// if(!(age >= 14 && age <= 90 )){
// console.log(true)
// }else{
//     console.log(false)
// }

// if(age < 14 || age > 90 ){
//     console.log(true)
//     }else{
//         console.log(false)
//     }




// if (-1 || 0) alert( 'first' );//true
// if (-1 && 0) alert( 'second' );//false
// if (null || -1 && 1) alert( 'third' );//true




// let login = prompt("Admin", "");

// if (login == "Admin") {
//   let pass = prompt("please write your pass", "");

//   if (pass == "12345") {
//     console.log("Здравствуйте");
//   } else if (pass == "" || pass == null) {
//     console.log("Отмена");
//   } else {
//     console.log("Пароль не верный");
//   }
// } else if (login == "" || login == null) {
//   console.log("Отмена");
// } else  {
//   console.log("Я вас не знаю");
// }


//----------------------------------------------


//Операторы сравнения

// 5 > 4                   //true
// "ананас" > "яблоко"     //false (не понял про символьное значение)
// "2" > "12"              //true (первый символ одного числа > первого символа второго числа)
// undefined == null       //true
// undefined === null      //false
// null == "\n0\n"         //false
// null === +"\n0\n"       //false