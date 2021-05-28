import { useCallback, useReducer } from 'react';

const initialState = (isPending = false) => ({
  data: null,
  error: null,
  status: isPending ? 'pending' : null,
});

const httpReducer = (state, action) => {
  if (action.type === 'SENDING') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }
  if (action.type === 'SENT') {
    return {
      data: action.data,
      error: null,
      status: 'completed',
    };
  }
  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.error,
      status: 'completed',
    };
  }
  return initialState();
};

const useHttp = (requester, isPending = false) => {
  const [state, dispatch] = useReducer(httpReducer, initialState(isPending));

  const sendRequest = useCallback(
    async (requestPayload) => {
      dispatch({ type: 'SENDING' });
      try {
        const data = await requester(requestPayload);
        dispatch({ type: 'SENT', data: data });
      } catch (error) {
        dispatch({ type: 'ERROR', error: error.message || 'Something went wrong' });
      }
    },
    [requester]
  );

  return {
    sendRequest,
    ...state,
  };
};

export default useHttp;
