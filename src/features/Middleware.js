// @ts-check
import React from "react";

import { resetEntry, setEntry } from "./output/workingEntrySlice";
import { pushToEntry } from "./output/workingEntrySlice";
import { resetFormula } from "./input/inputSlice";
import { pushToFormula } from "./input/inputSlice";
import simplify from "./Arithmetic"

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
      dispatch(resetEntry());
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
        dispatch(pushToFormula(output));
        dispatch(pushToFormula(keypress));
        dispatch(resetEntry());
      }
    }
  }

  else if (keypress == '=') {
    return function calculate(dispatch, getState) {

      const outputSelector = (state) => state.output.value;
      const output = outputSelector(getState());

      dispatch(pushToFormula(output));
      dispatch(pushToFormula(keypress));
      dispatch(resetEntry());

      const formulaSelector = (state) => state.input.value;
      const formula = formulaSelector(getState());

      const result = simplify(formula);
      dispatch(setEntry(result));

    }
  }

  /**
   * @param {import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction>} dispatch
   * @param {() => import("@reduxjs/toolkit").Store} getState
   */
  return function dispatchKey(dispatch, getState) {

    const outputSelector = (state) => state.output.value;
    /**
     * @type {string}
     */
    const output = outputSelector(getState());

    if (output == 0) {
      dispatch(setEntry(keypress))
    }

    else {

      if (keypress == '.') {
        /**
         * @type {RegExp}
         */
        const decimal = /\./g;
        const moreThanOneDecimal = (() => {
          let matches = output.match(decimal);
          if (matches == null) return false;
          else if (matches.length < 1) return false;
          else return true;
        }
        )();
        if (!moreThanOneDecimal) {
          dispatch(pushToEntry(keypress));
        }
      }

      else dispatch(pushToEntry(keypress));
    }

  }
}
