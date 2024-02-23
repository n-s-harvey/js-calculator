// @ts-check
import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: '0',
  },
  reducers: {
    /**
     * Concatenate a digit, decimal, or operator to the end of user's input string.
     */
    push: (state, action) => {
      state.value += action.payload;
    },
    /**
     * Set the user's input string to '0'.
     */
    reset: (state) => {
      state.value = '0';
    }
  }
})

export const { push, reset } = inputSlice.actions;

export default inputSlice.reducer;
