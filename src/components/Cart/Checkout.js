import useInput from '../../hooks/use-input';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const [nameValue, nameChangeHandler] = useInput();
  const [streetValue, streetChangeHandler] = useInput();
  const [postalValue, postalChangeHandler] = useInput();
  const [cityValue, cityChangeHandler] = useInput();

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log(nameValue, streetValue, postalValue, cityValue);
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          value={streetValue}
          onChange={streetChangeHandler}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          name="postal"
          type="text"
          value={postalValue}
          onChange={postalChangeHandler}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={cityValue}
          onChange={cityChangeHandler}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
