import { useState } from 'react';

const useInput = (defaultValue, validator) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validator(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return [
    enteredValue,
    hasError,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset
  ];
};

export default useInput;
