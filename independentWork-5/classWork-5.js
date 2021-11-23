//#1
// Раскоментировать код и починить ошибку чтобы отработала консоль

/*class ClassFirst {
  constructor(prop1) {
    super(prop1)
    this.prop1 = prop1;
  }
}

class ClassSecond extends ClassFirst {
  constructor(prop1, prop2) {
    this.prop2 = prop2;
    super(prop1);
  }
}

class ClassThird extends ClassSecond {
  constructor(prop1, prop2, prop3) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;
  }
}

const instance = new ClassThird('prop1', 'prop2', 'prop3');
console.log('PROPS =>', instance.prop1, instance.prop2, instance.prop3);
*/

//#2
// Создать класс со свойствами title и date
// и статическим свойством , которое при вызове
// всегда возвращает новый экземпляр газеты с текущей датой

export class NewsPaper {
  // constructor(name, date) {
  //   this.name = name;
  //   this.date =date
  // }
  // static createNewPaper(name){
  //   const date = new Date().toLocaleDateString();
  //   return new this(name, date)
  // }
}

// #3 Создать иерархию классов
// ThirdCalculate -> SecondCalculate -> CalculateBase
// чтобы при вызове метода calculate у Класса ThirdCalculate
// выводилась строка
// ThirdCalculate: 1 SecondCalculate: 2 CalculateBase: 3

// class CalculateBase{
//   constructor(){
//     this.count = 0
//   }
//   calculate(){
//     return `CalculateBase ${this.count++}`
//   }
// }

// class SecondCalculate extends CalculateBase{
//   constructor(count){
//     super(count)
//     this.count = 0
//   }
//   calculate(){
//     return `SecondCalculate ${++this.count} ${super.calculate() }`
//   }
// }

// class ThirdCalculate extends SecondCalculate{
//   constructor(){
//     super()
//     this.count = 0
//   }
//   calculate(){
//     return `ThirdCalculate' ${++this.count}, ${super.calculate()}`
//   }
// }

// const calc = new ThirdCalculate()
// console.log(`CALC =>` calc.calculate())

//#4
//написать функцию которая будет вызывать нужный модуль
//по передаваемом типу first или second

export const callCurrentModule = (type) => {
  if (type == "first") {
    import("./module1").then((module) => module.moduleFirst());
  } else {
    import("./module2").then((module) => module.moduleSecond());
  }
  // console.log(type)
};

//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду

function pinger(count) {
  let timeId = setInterval(function () {
    console.log("PING", count);
    count--;
    if (!count) {
      clearInterval(timeId);
    }
  }, 1000);
}

pinger(10);
