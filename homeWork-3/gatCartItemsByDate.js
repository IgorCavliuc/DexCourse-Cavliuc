export const getCartItemsByDate = (cartData, date) => {
    //TODO: выбрать покупки сделанные за выбранную дату
  
    const dataPrice = cartData.map((item) => {
      let itemAll = item;
      let dataTime = new Date(date);
      let dataTimes = new Date(item.date);
      dataTime.setHours(0, 0, 0, 0);
      dataTimes.setHours(0, 0, 0, 0);
      let dataTotal = Date.parse(dataTime) - Date.parse(dataTimes);
  
      if (dataTotal == 0) {
        return itemAll;
      } else if (dataTotal !== 0) {
        return cartData;
  
        //не могу вывести в else все остальные данные
      }
    });
  
    //  const data = new Date(dataTime.getFullYear(), dataTime.getMonth(), dataTime.getDate())
  
    //нужно вернуть dataPrice
    return cartData;
  };
 