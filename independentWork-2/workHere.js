// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // ?

// //4 - потому что shoppingCart это прямая ссылку на fruits

//===============================================

// let style = ['Джаз', 'Блюз'];

// style.push('Рок-н-ролл')

// let length = style.length /2
// style.splice(length, 1, 'Классика')

// alert(style.shift())

// style.unshift('Реп', 'Регги')

//==================================================

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // функция добавляет в массив себя же, поэтому arr.length = 3

//==================================================

// let arrs = [];

// const sumInput = () => {
//     let num;

//    while(true){
//     let num = prompt("Введите пожалуйста число", 0);
//     if(num === null || num === "") break;
//     // не мог понять как остановить если вводится не число
//     arrs.push(+num)
//    }
//    let sum = 0;
//    for (let arr of arrs) {
//     sum += arr;
//   }
//   return sum;

// };
// console.log(sumInput());

//=================================================

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let sumNumber = 0;
//   //пчему sumNumber не правильно выдает сумму если она определена во вне цикла?

//   for (let i = 0; i < arr.length; i++) {
//       for(let k = i; k < arr.length; k++){
//           sumNumber += arr[k]
//           maxSum = Math.max(maxSum, sumNumber)
//       }
//   }

//   return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// console.log(getMaxSubSum([-1, -2, -3])); // 0
// console.log(getMaxSubSum([1, 2, 3])); // 6

//==================================================
//==================================================
