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
    return function handleOperatorThunk(dispatch, getState) {

      const selectWorkingEntry = (state) => state.output.value;
      const selectFormula = (state) => state.input.value;

      /**
       * @type {String}
       */
      const workingEntry = selectWorkingEntry(getState());

      /**
       * @type {Array<string|number>}
       */
      const formula = selectFormula(getState());

      const isFormulaEvaluated = formula.includes('=');

      if (isFormulaEvaluated) {
        dispatch(resetFormula());
        dispatch(pushToFormula(workingEntry));
        dispatch(pushToFormula(keypress));
        dispatch(resetEntry());
        return;
      }

      const isEntryEmpty = workingEntry == '0';

      if (isEntryEmpty) {

        if (keypress != Operators.subtract) {
          dispatch(formulaPop());
          dispatch(pushToFormula(keypress));
          dispatch(resetEntry());
          return;
        }

        if (formula.at(-1) != Operators.subtract) {
          // Dispatch a hyphen: Operators.subtract is an en dash and won't parse
          dispatch(setEntry('-'));
          return;
        }

      }

      if (!isEntryEmpty) {
        dispatch(pushToFormula(workingEntry));
        dispatch(pushToFormula(keypress));
        dispatch(resetEntry());
        return;
      }

    }
  }

  else if (keypress == '=') {
    return function calculateThunk(dispatch, getState) {

      const selectWorkingEntry = (state) => state.output.value;
      const workingEntry = selectWorkingEntry(getState());

      dispatch(pushToFormula(workingEntry));
      dispatch(pushToFormula(keypress));
      dispatch(resetEntry());

      const selectFormula = (state) => state.input.value;
      const formula = selectFormula(getState());

      const result = simplify(formula);
      dispatch(setEntry(result));

    }
  }

  /**
   * @param {import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").AnyAction>} dispatch
   * @param {() => import("@reduxjs/toolkit").Store} getState
   */
  return function handleKeyThunk(dispatch, getState) {

    const selectWorkingEntry = (state) => state.output.value;
    /**
     * @type {string}
     */
    const workingEntry = selectWorkingEntry(getState());

    const isWorkingEntryEmpty = workingEntry == '0';

    if (isWorkingEntryEmpty) {
      dispatch(setEntry(keypress));
      return;
    }

    if (keypress == '.') {
      /**
       * @type {RegExp}
       */
      const decimal = /\./g;

      const isDecimalInWorkingEntry = (() => {
        let matches = workingEntry.match(decimal);
        if (matches == null) return false;
        else return true;
      }
      )();

      if (!isDecimalInWorkingEntry) {
        dispatch(pushToEntry(keypress));
        return;
      }
    }

    else if (keypress != '.') {
      dispatch(pushToEntry(keypress));
      return;
    }

  }
}
