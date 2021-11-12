//==================================================

// function camelize(str) {
//     return str
//     .split('-')
//     .map((word, index) => index === 0? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
//   }

//   console.log(camelize('my-long-word'))

//=====================================================

// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) =>{

//    return arr.filter(item => (a <= item && item <=b))

//     //если будут введены числа с начала большее потом меньшее?

// }

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)

// console.log( arr ); // 5,3,8,1 (без изменений)

//=================================================

// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, a, b)=> {
//   for (let num in arr) {
//     if (a <= num || num <= b) {
//       arr.splice(num, 1);
//     }
//   }
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr); // [3, 1]

//===============================================

//не понял сразу какая должна быть сортировка

// let arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = (arr)=> {
//     return arr.slice().sort();
//   }

//   let sorted = copySorted(arr);

//   console.log( sorted );
//   console.log( arr );

//==================================================

//-----------Calc-----

//==================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)
//  console.log(names)

//===================================================

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => ({
//     fullName: `${item.name} ${item.surname}`, id:item.id
// }))
// console.log(usersMapped)

//=========================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// const sortByAge = (age) =>{
//     arr.sort((a,b) => a.age > b.age ? 1 : -1)
// }

// sortByAge(arr);

// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)

//===========================================================

// function shuffle(array) {
//     // array.sort(() => Math.random() * 1 );
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// //функция из гугла
//     return array;
//   }

//   let arr = [1, 2, 3];
//   shuffle(arr);
//   console.log(arr);

//=============================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];

// const  getAverageAge = (users) =>{
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }

//   console.log( getAverageAge(arr) );

//=============================================================

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// const unique = (arr) => {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// };

// console.log(unique(strings));

//====================================================================
