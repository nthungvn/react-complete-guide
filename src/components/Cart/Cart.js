import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.items);

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      item={{
        title: item.title,
        quantity: item.amount,
        total: item.amount * item.price,
        price: item.price,
      }}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
