import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalquantity = cartItems.reduce((prev, item) => item.quantity + prev, 0);
  const dispatch = useDispatch();

  const clickCartButtonHandler = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return (
    <button onClick={clickCartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;
