import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const cart = await response.json();
      dispatch(cartActions.replaceCart(cart));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          message: error.message,
          title: 'Error!',
        })
      );
      setTimeout(() => {
        dispatch(
          uiActions.showNotification({
            status: undefined,
            message: undefined,
            title: undefined,
          })
        );
      }, 2000);
    }
  };
};

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
          body: JSON.stringify({ items: cart.items }),
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
