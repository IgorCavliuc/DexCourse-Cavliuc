export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
};

export const showPrice = (price, discount) => {
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
};

export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
};
