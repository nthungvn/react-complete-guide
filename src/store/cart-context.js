import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  let newState = {};
  if (action.type === 'ADD_ITEM') {
    const index = prevState.items.findIndex(
      (cartItem) => cartItem.id === action.item.id
    );
    if (index !== -1) {
      newState.items = [...prevState.items];
      newState.items[index].amount =
        newState.items[index].amount + action.item.amount;
    } else {
      newState.items = [...prevState.items, action.item];
    }
    newState.totalAmount =
      prevState.totalAmount + action.item.price * action.item.amount;

    return newState;
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
