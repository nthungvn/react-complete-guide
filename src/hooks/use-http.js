import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpRequest = useCallback(async (requestConfig, extraFn) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        headers: requestConfig.headers || {},
        body: JSON.stringify(requestConfig.body) || null,
      });
      if (!response.ok) {
        throw Error('Something went wrong!');
      }
      const data = await response.json();
      extraFn(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return [isLoading, error, httpRequest];
};

export default useHttp;
