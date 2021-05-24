import { useState } from 'react';
import useInput from '../../hooks/use-input';
import classes from './Checkout.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isPostal = (value) => value.trim().length === 5 && parseInt(value.trim());

const Checkout = (props) => {
  const [nameValue, nameIsValid, nameChangeHandler] = useInput(isNotEmpty);
  const [streetValue, streetIsValid, streetChangeHandler] = useInput(isNotEmpty);
  const [postalValue, postalIsValid, postalChangeHandler] = useInput(isPostal);
  const [cityValue, cityIsValid, cityChangeHandler] = useInput(isNotEmpty);
  const [isTouched, setIsTouched] = useState(false);

  const formIsValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    setIsTouched(true);
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(nameValue, streetValue, postalValue, cityValue);
    setIsTouched(false);
  };

  const nameControlClasses =
    isTouched && !nameIsValid
      ? `${classes.control} ${classes.invalid}`
      : classes.control;
  const streetControlClasses =
    isTouched && !streetIsValid
      ? `${classes.control} ${classes.invalid}`
      : classes.control;
  const postalControlClasses =
    isTouched && !postalIsValid
      ? `${classes.control} ${classes.invalid}`
      : classes.control;
  const cityControlClasses =
    isTouched && !cityIsValid
      ? `${classes.control} ${classes.invalid}`
      : classes.control;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
        />
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          value={streetValue}
          onChange={streetChangeHandler}
        />
      </div>

      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          name="postal"
          type="text"
          value={postalValue}
          onChange={postalChangeHandler}
        />
      </div>

      <div className={cityControlClasses}>
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
