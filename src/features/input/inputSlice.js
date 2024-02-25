// @ts-check
import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: '0',
  },
  reducers: {
    /**
     * Concatenate a number or operator to the end of the user's input formula.
     */
    pushToFormula: (state, action) => {
      state.value += action.payload;
    },
    /**
     * Set the user's input formula to '0'.
     */
    resetFormula: (state) => {
      state.value = '0';
    }
  }
})

export const { pushToFormula, resetFormula } = inputSlice.actions;

export default inputSlice.reducer;
