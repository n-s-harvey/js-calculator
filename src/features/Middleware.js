// @ts-check
import React from "react";

import { resetEntry, setEntry } from "./output/workingEntrySlice";
import { pushToEntry } from "./output/workingEntrySlice";
import { resetFormula } from "./input/inputSlice";
import { pushToFormula } from "./input/inputSlice";
import { formulaPop } from "./input/inputSlice";
import simplify from "./Arithmetic"
import Operators from "./Operators";

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

  else if (Operators.includes(keypress)) {
    /**
     * @param {import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction>} dispatch
     * @param {() => import("@reduxjs/toolkit").Store} getState
     */
    return function pushSymbol(dispatch, getState) {
      const workingEntrySelector = (state) => state.output.value;
      const workingEntry = workingEntrySelector(getState());
      if (workingEntry !== '0') {
        dispatch(pushToFormula(workingEntry));
        dispatch(pushToFormula(keypress));
        dispatch(resetEntry());
      }
      if (workingEntry == '0') {
        if (keypress != Operators.subtract) {
          dispatch(formulaPop());
          dispatch(pushToFormula(keypress));
          dispatch(resetEntry());
        }
        else {
          const formulaSelector = (state) => state.input.value;
          const formula = formulaSelector(getState());
          if (formula.at(-1) != Operators.subtract) {
            // Dispatch a hyphen: Operators.subtract is an en dash and won't parse
            dispatch(setEntry('-'));
          }
        }
      }
    }
  }

  else if (keypress == '=') {
    return function calculate(dispatch, getState) {

      const workingEntrySelector = (state) => state.output.value;
      const workingEntry = workingEntrySelector(getState());

      dispatch(pushToFormula(workingEntry));
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

    const workingEntrySelector = (state) => state.output.value;
    /**
     * @type {string}
     */
    const workingEntry = workingEntrySelector(getState());

    if (workingEntry == 0) {
      dispatch(setEntry(keypress))
    }

    else {

      if (keypress == '.') {
        /**
         * @type {RegExp}
         */
        const decimal = /\./g;
        const moreThanOneDecimal = (() => {
          let matches = workingEntry.match(decimal);
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
