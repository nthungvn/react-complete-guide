import React, { useState } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemToCartHandler = (item) => {
    setCart((prevData) => {
      let updatedData;
      const index = prevData.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        updatedData = [...prevData];
        updatedData[index].amount = updatedData[index].amount + item.amount;
      } else {
        updatedData = [...prevData, item];
      }
      return updatedData;
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cart,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
