import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.items);
  const totalAmount = cartItems.reduce((prev, item) => item.amount + prev, 0);
  const dispatch = useDispatch();

  const clickCartButtonHandler = () => {
    dispatch(cartActions.toggleShowCart());
  };

  return (
    <button onClick={clickCartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
