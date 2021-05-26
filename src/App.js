import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
