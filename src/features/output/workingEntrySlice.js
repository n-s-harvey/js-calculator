// @ts-check
import { createSlice } from "@reduxjs/toolkit";

export const workingEntrySlice = createSlice({
  name: 'output',
  initialState: {
    value: '0',
  },
  reducers: {
    /**
     * Set the display value of the Calculator.
     */
    setEntry: (state, action) => {
      state.value = action.payload;
    },
    /**
     * Set the display input string to '0'.
     */
    resetEntry: (state) => {
      state.value = '0';
    },
    /**
     * Concatenate digits to the end of the user's working entry.
     */
    pushToEntry: (state, action) => {
      state.value += action.payload;
    },
  }
})

export const { setEntry, resetEntry, pushToEntry } = workingEntrySlice.actions;

export default workingEntrySlice.reducer;
