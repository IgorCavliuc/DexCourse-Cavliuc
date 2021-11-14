export const calcSum = (cartData) => {
    //TODO: посчитать суммы по типам товаров и их цены
  
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
    });
    return {
      total: { count: totalCount, sum: totalSum },
      water: { count: waterCount, sum: waterSum },
      pizza: { count: pizzaCount, sum: pizzaSum },
      other: { count: otherCount, sum: otherSum }
    };
  };
  
  