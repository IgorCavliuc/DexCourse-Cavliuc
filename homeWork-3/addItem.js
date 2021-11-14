export const addItem = (cartData, item) => {
    //TODO: увеличить кол-во товара в полученном элементе
    let id = item.id
    let addItem = cartData.map((item) =>{
  
      if(item.id == id){
        item.count++
      }
    })
  
    return cartData;
  };
  