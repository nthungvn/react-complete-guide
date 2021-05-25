import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowCart: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleShowCart: (state) => {
      state.isShowCart = !state.isShowCart;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
