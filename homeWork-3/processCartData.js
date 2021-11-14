export const processCartData = (cartData) => {
    //TODO: Нужно добавить поле discount(oldPrice - price)
    // убрать поле oldPrice
    const total = cartData.map((item) => {
      let totalCach;
  
      if (item.oldPrice > item.price) {
        totalCach = item.oldPrice - item.price;
      } else {
        totalCach = 0;
      }
  
      const discount = Object.assign(item, { discount: totalCach });
      return discount;
    });
  
    return total;
  
    //не могу удалить oldPrice (если удаляю, то discount выдает NaN)
  };
  