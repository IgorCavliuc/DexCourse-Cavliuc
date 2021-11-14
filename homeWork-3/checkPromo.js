export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров

  let totalSums = false;
  let oneBigPositions = false;
  let notDiscount = false;

  let totalCount = 0;
  let totalSum = 0;
  let waterCount = 0;
  let waterSum = 0;
  let pizzaCount = 0;
  let pizzaSum = 0;
  let otherCount = 0;
  let otherSum = 0;

  const water = cartData.map((item) => {
    let total = item.count * item.price;

    if (item.type == "water") {
      waterCount += +item.count;
      waterSum += total;
    } else if (item.type == "pizza") {
      pizzaCount += +item.count;
      pizzaSum += total;
    } else if (item.type == "other") {
      otherCount += +item.count;
      otherSum += total;
    }

    totalCount += +item.count;
    totalSum = waterSum + pizzaSum + otherSum;

    if (totalSum > 1000) {
      return (totalSums = true);
    }
    if (!item.discount) {
      return (notDiscount = false);
    }
    if (total > 500) {
      //сортирует только пиццы ( если пиццы > 500 - выводит правильно)
      // если увеличить все остальное,не покажет что есть элементы > 500
      return (oneBigPositions = true);
    }
  });

  return {
    total: totalSums,
    oneBigPosition: oneBigPositions,
    notDiscounted: notDiscount,
  };
};
