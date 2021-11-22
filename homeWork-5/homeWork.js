import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return compareText(str)
    .then((res) => `'Sucsess: ${res}'`)
    .catch((err) => `'Error: ${err.message}'`);
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try {
    let gD = await getData(str);
    if (gD.inclides("Error")) {
      throw new Error(str);
    } else {
      console.log(gD);
    }
  } catch (e) {
    console.log(e.message);
  }
};
processingData("короткий текст");
processingData("11111111111111111");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  return compareText(str).then((res) => {
    if (str.length >= 20) {
      console.log(res, ":)");
    } else {
      console.log(res, ":(");
    }
  });
};

getResponse("короткий текkkkkkkkkkст");
getResponse("1234567890123456789");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  let res = await fetch(url);

  if (res.ok) {
    let json = await res.json();
    console.log(json);
  } else {
    console.log("Ошибка HTTP: " + res.status);
  }
};

getDataFromAPI("https://jsonplaceholder.typicode.com/users");
//выбивает ошибку в окне, в консоле выводит один элемент
//попробовал другую ссылку
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
