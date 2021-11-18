//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, fun) => {
  // function funcСurryingCount(...rest) {
  //     if (rest.length >= 3) {
  //       return rest.reduce((total, current) => total + current, 0);
  //     } else {
  //       return (...rest2) => fun(...rest, ...rest2);
  //     }
  //   }
  // let count = 0
  // return function funs () {
  //  console.log(count++, name, funcСurryingCount(5, 2,3))
  //   return fun
  // }
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, fun) => {
  //   return function ( fun){
  //     console.log(name, fun)
  //   }
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом,
// чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов

export const curry = (fun) => {
  // return function (num) {
  //   const infiniteCurry = (fn) => {
  //     const next = (...args) => {
  //       return (x) => {
  //         if (!x) {
  //           return args.reduce((acc, a) => {
  //             return fn.call(fn, acc, a);
  //           }, 0);
  //         }
  //         return next(...args, x);
  //       };
  //     };
  //     return next();
  //   };
  //   const iSum = infiniteCurry((x, y) => x + y);
  //   console.log(num, iSum(1)(3)(10)(6)(1)()); //нужно оставлять последний эллемент пустым
  // };
};
