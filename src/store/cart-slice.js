import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

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
        state.items[foundIndex].quantity++;
      } else {
        state.items.push(action.payload);
      }
    },

    removeItemFromCart: (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (foundIndex !== -1) {
        if (state.items[foundIndex].quantity <= 1) {
          state.items.splice(foundIndex, 1);
        } else {
          state.items[foundIndex].quantity--;
        }
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    try {
      const response = await fetch(
        'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          message: error.message,
          title: 'Error!',
        })
      );
    }
    setTimeout(() => {
      dispatch(
        uiActions.showNotification({
          status: undefined,
          message: undefined,
          title: undefined,
        })
      );
    }, 2000);
  };
};

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
