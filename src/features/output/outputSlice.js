// @ts-check
import { createSlice } from "@reduxjs/toolkit";

export const outputSlice = createSlice({
  name: 'output',
  initialState: {
    value: '0',
  },
  reducers: {
    /**
     * Set the display value of the Calculator.
     */
    setOutput: (state, action) => {
      state.value = action.payload;
    },
    /**
     * Set the display input string to '0'.
     */
    resetOutput: (state) => {
      state.value = '0';
    },
    /**
     * Concatenate digits to the end of the user's working entry.
     */
    pushOutput: (state, action) => {
      state.value += action.payload;
    },
  }
})

export const { setOutput, resetOutput, pushOutput } = outputSlice.actions;

export default outputSlice.reducer;
