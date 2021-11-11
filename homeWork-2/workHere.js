export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
   let first = f;
   let second = s;

   return first + second
   //??????????????????????
};

export const showPrice = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;
  return `${(Math.ceil(discountedPrice * 10) / 10).toFixed(2)} p`;
  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина
};

export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
  let lowercase = bankResponse.toLowerCase();

  return lowercase.includes("success") ? "Yes" : "No";
};

export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день

  let data = new Date(date);
  let data1 = new Date();

  // let year =  data.getFullYear() === data1.getFullYear();
  // let month = data.getMonth() === data1.getMonth();
  // let day =   data.getDate() === data1.getDate();
  //  if(year && month && day ){
  //    console.log(date)

  //не выводится результат сравнения в return
  //}

  let caldr = `${data.getFullYear()} : ${
    data.getMonth() + 1
  } : ${data.getDate()}`;

  return caldr;
};

export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
  let sort = data.sort();
//могу понять почему ёж стоит на последнем месте
  return sort
};
