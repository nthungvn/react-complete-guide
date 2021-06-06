import { useCallback, useReducer } from 'react';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  extra: null,
  identifier: null,
};

const httpReducer = (state, action) => {
  if (action.type === 'SENDING') {
    return initialState;
  }

  if (action.type === 'ERROR') {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }

  if (action.type === 'RESPONSE') {
    return {
      ...state,
      data: action.data,
      isLoading: false,
      extra: action.extra,
      identifier: action.identifier,
    };
  }

  if (action.type === 'CLEAR_ERROR') {
    return {
      data: state.data,
      isLoading: false,
      error: null,
    };
  }

  return state;
};

const useHttp = () => {
  const [state, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(async (requestConfig) => {
    dispatch({ type: 'SENDING' });
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        body: JSON.stringify(requestConfig.body),
        headers: requestConfig.headers || null,
      });
      if (!response.ok) {
        throw new Error('Failed to send request');
      }
      const data = await response.json();
      dispatch({
        type: 'RESPONSE',
        data: data,
        extra: requestConfig.extra,
        identifier: requestConfig.identifier,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: error.message || 'Something went wrong',
      });
    }
  }, []);

  return { sendRequest, ...state };
};

export default useHttp;
