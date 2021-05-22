import { useState } from 'react';

const useHttp = (requestConfig, applyDataFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        headers: requestConfig.headers || {},
        body: JSON.stringify(requestConfig.requestConfig) || null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyDataFn(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return [isLoading, error, sendRequest];
};

export default useHttp;
