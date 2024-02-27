// @ts-check
import React from "react";

import { resetOutput } from "./output/outputSlice";
import { pushOutput } from "./output/outputSlice";
import { resetFormula } from "./input/inputSlice";
import { pushToFormula } from "./input/inputSlice";

const calculatorOperations = new Map([
  ['*', 'multiply'],
  ['/', 'divide'],
  ['+', 'add'],
  ['-', 'subtract']
]);

/**
 * @param {string} keypress
 * @returns {any} - Necessary because TypeScript otherwise believes types are conflicting in KeypadButton.
 */
export default function handleKeydown(keypress) {
  if (keypress == 'clear') {
    /**
     * @param {import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction>} dispatch
     * @param {() => import("@reduxjs/toolkit").Store} getState
     */
    return function clearThunk(dispatch, getState) {
      dispatch(resetFormula());
      dispatch(resetOutput());
    }
  }

  else if (calculatorOperations.has(keypress)) {
    /**
     * @param {import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction>} dispatch
     * @param {() => import("@reduxjs/toolkit").Store} getState
     */
    return function pushSymbol(dispatch, getState) {
      const outputSelector = (state) => state.output.value;
      const output = outputSelector(getState());
      if (output !== '0') {
        dispatch(pushOutput(keypress));
        const updatedOutput = `${output + keypress}`;
        dispatch(pushToFormula(updatedOutput));
        dispatch(resetOutput());
      }
    }
  }
  /**
   * @param {import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction>} dispatch
   * @param {() => import("@reduxjs/toolkit").Store} getState
   */
  return function dispatchKey(dispatch, getState) {
    dispatch(pushOutput(keypress));
  }
}
