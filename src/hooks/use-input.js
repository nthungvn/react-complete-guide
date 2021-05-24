import { useState } from 'react';

const useInput = (validator) => {
  const [value, setValue] = useState('');
  const isValid = validator(value);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, isValid, changeHandler];
};

export default useInput;
