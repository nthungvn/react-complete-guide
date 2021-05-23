import { useReducer } from 'react';

const INITIAL_STATE = {
  value: '',
  isTouched: false,
};

const reducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  return INITIAL_STATE;
};

const useInput = (validator) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const valueIsValid = validator(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return [
    state.value,
    hasError,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  ];
};

export default useInput;
