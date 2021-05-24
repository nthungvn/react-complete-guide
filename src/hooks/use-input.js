import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, changeHandler];
};

export default useInput;
