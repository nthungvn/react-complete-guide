import { useEffect, useState } from 'react';

const useCounter = (fn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(fn);
    }, 1000);

    return () => clearInterval(interval);
  }, [fn]);

  return counter;
};

export default useCounter;
