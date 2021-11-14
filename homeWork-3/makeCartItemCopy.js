
  export const makeCartItemCopy = (cartItem) => {
    //TODO: сделать копию элемента "Пицца с анчоусами"
    // После увеличить кол-во добавленного ингредиента
    let pizza = cartItem[0].addedIngredients[0].count + 1;
    const count1 = Object.assign(cartItem[0]);
    const count = Object.assign(cartItem[0].addedIngredients[0], {
      count: pizza
    });
  
    return count1;
  };
  
 