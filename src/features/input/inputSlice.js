// @ts-check
import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: [0],
  },
  reducers: {
    /**
     * Concatenate a number or operator to the end of the user's input formula.
     */
    pushToFormula: (state, action) => {
      const payload = action.payload;
      const maybeNumber = parseFloat(payload);
      if (isNaN(maybeNumber)) {
        state.value.push(action.payload);
      }
      else {
        if (state.value.length == 1) {
          state.value[0] = maybeNumber;
        }
        else {
          state.value.push(maybeNumber);
        }
      }
    },
    /**
     * Set the user's input formula to '0'.
     */
    resetFormula: (state) => {
      state.value = [0];
    },
    /**
     * Pop the last entry from the formula.
     */
    formulaPop: (state) => {
      state.value.pop();
    }
  }
})

export const { pushToFormula, resetFormula, formulaPop } = inputSlice.actions;

export default inputSlice.reducer;
