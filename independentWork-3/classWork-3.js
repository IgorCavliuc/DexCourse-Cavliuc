// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"

//const funcContainer = (str1) => (params) => str1 + " " + params;

// function funcContainer(str1) {
//   return function (params) {
//     return str1 + ' ' + params;
//   };
// }
// const funcChild = funcContainer('Hello');

//console.log(funcChild("word"));
//console.log(funcChild("Ben"));

// Создать функцию, которая будет выполняться как func(1)(2)(3)
// function funcСurrying(num1) {
//   return function (num2) {
//     return function (num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }

// function funcСurrying1(...rest) {}

//console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));

// Создать функцию, которая будет выполняться
// при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
// и возвращать их сумму

// function funcСurryingArgs (...rest){
//   if(rest.length <= 3){
//     return rest.reduce((total, current) => total + current, 0)
//   }else{
//     return (...rest2) => funcСurryingArgs(...rest, ...rest2)
//   }
// }

//  console.log("funcСurryingArgs(1,3,4) ", funcСurryingArgs(1, 3, 4, 1));
//console.log("funcСurryingArgs(1,3)(4) ", funcСurryingArgs(1, 3)(4));
// console.log("funcСurryingArgs(1)(3,4) ", funcСurryingArgs(1)(3, 4));
// console.log("funcСurryingArgs(1)(3)(4) ", funcСurryingArgs(1)(3)(4));



// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению
function funcСurryingCount(num){
    return function fun (...rest){
     
      if(rest.length == num){
        return rest.reduce((total, current) => total + current, 0)
      }else
      if(rest.length < num){
        return (...rest2) => fun(...rest, ...rest2)
      }else{
        let restTot = rest.splice(0, num)
        return restTot.map(i=>x+=i, x=0).reverse()[0]
        }
    
    }
    }
    
    const funcCurrent = funcСurryingCount(3);
    
     console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4, ));
    // console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4, 6, 5));
    // console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3));
    // console.log("funcCurrent(1)(3)(4) ", funcCurrent(10)(3)(4,5));
    
    // const func1 = (...rest) => {
    //   return rest.reduce((total, current) => total + current, 0)
    
    // };
    
    // const func2 = () => {
    //   console.trace();
    //   return "func2!!!!!!!";
    // };
    
    // func1();
    
    
    