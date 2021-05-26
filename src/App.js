import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
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
    sendCartData();
  }, [cart, dispatch]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      {notification.status && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Products />
    </Layout>
  );
}

export default App;
