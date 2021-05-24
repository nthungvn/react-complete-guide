import { useContext, useState } from 'react';
import useHttp from '../../hooks/use-http';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isLoading, error, httpRequest] = useHttp();

  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    const requestConfig = {
      url: 'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/meals-orders.json',
      method: 'POST',
      body: {
        user: userData,
        orderItems: cartCtx.items,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const responseHandler = (data) => {
      console.log(data);
      // cartCtx.
      // props.onClose();
    };
    httpRequest(requestConfig, responseHandler);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};
export default Cart;
