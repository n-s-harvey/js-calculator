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
    set: (state, action) => {
      state.value = action.payload;
    },
    /**
     * Set the display input string to '0'.
     */
    reset: (state) => {
      state.value = '0';
    }
  }
})

export const { set } = outputSlice.actions;

export default outputSlice.reducer;
