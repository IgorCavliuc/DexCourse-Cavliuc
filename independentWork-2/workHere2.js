//=================================================================

// let user = {}

// user.name='John'
// user.surname ='Smith'
// user.name = 'Pete'
// delete user.name

// console.log(user)

//===========================================================

// let schedule = {};

// const isEmpty = (arr) => {
//   for (let key in arr) {
//     return false;
//   }
//   return true;
// };

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

//=====================================================================

// const user = {
//     name: "John"
//   };
// //yt будет работать, т.к константа не изменна
// // почему все таки изменяется?
//   user.name = "Pete";

//   console.log(user)

//====================================================================

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
//   for(let key in salaries){
//       sum += salaries[key]
//   }

//   console.log(sum)

//====================================================================

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// const multiplyNumeric =(obj) => {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
//  multiplyNumeric(menu)

//   console.log( multiplyNumeric(menu))

//   //не могу вывести значение
