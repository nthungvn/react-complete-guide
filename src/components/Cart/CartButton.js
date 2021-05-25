import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const clickCartButtonHandler = () => {
    dispatch(cartActions.toggleShowCart());
  };

  return (
    <button onClick={clickCartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
