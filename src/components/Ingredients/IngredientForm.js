import React, { useState } from 'react';
import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredName] = useState();
  const [enteredAmount, setEnteredAmount] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  const changeNameHandler = (event) => {
    const titleValue = event.target.value.trim();
    if (!titleValue) {
      return;
    }
    setEnteredName(titleValue);
  };

  const changeAmountHandler = (event) => {
    const amountValue = event.target.value.trim();
    if (!amountValue) {
      return;
    }
    setEnteredAmount(amountValue);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onInput={changeNameHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onInput={changeAmountHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
