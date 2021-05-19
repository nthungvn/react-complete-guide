import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const inputProps = {
    id: `amount-${props.id}`,
    name: 'amount',
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value.trim();
    const numberEnteredAmount = +enteredAmount;
    if (
      enteredAmount.length === 0 ||
      numberEnteredAmount < 1 ||
      numberEnteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(numberEnteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} input={inputProps} label="Amount" />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
