import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },

    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },

    removeItemFromCart: (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (foundIndex !== -1) {
        state.items.splice(foundIndex, 1);
      }
    },
  },
});

const store = createStore(cartSlice);

export default store;
