export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и
};

export const showPrice = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;
  return `${(Math.ceil(discountedPrice * 10) / 10).toFixed(2)} p`;
  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина
};

export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
};

export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
};

export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
};
