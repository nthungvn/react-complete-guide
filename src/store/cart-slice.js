import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) {
        state.items[foundIndex].quantity = state.items[foundIndex].quantity + 1;
      } else {
        state.items.push(action.payload);
      }
    },

    removeItemFromCart: (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (foundIndex !== -1) {
        state.items.splice(foundIndex, 1);
      }
    },

    increaseQuantity: (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (foundIndex !== -1) {
        state.items[foundIndex].quantity = state.items[foundIndex].quantity + 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (foundIndex !== -1) {
        if (state.items[foundIndex].quantity <= 1) {
          state.items.splice(foundIndex, 1);
        } else {
          state.items[foundIndex].quantity =
            state.items[foundIndex].quantity - 1;
        }
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
