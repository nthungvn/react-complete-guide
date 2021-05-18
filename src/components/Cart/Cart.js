import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = [
    { id: 'i1', name: 'Sushi', price: 22.99, amount: 3 },
    { id: 'i2', name: 'Sushi 2', price: 22.99, amount: 3 },
  ];
  const totalPrice = items
    .map((item) => item.price * item.amount)
    .reduce((oldResult, current) => oldResult + current, 0);

  const cartItems = items.map((item) => <CartItem key={item.id} {...item} />);

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalPrice}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
