import classes from './Checkout.module.css';

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
      <form onSubmit={confirmHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" />
        </div>

        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input id="street" name="street" type="text" />
        </div>

        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input id="postal" name="postal" type="text" />
        </div>

        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
  );
};

export default Checkout;
