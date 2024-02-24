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
    pushInput: (state, action) => {
      state.value += action.payload;
    },
    /**
     * Set the user's input string to '0'.
     */
    resetInput: (state) => {
      state.value = '0';
    }
  }
})

export const { pushInput, resetInput } = inputSlice.actions;

export default inputSlice.reducer;
