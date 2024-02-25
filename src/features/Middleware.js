// @ts-check
import React from "react";

import { resetOutput } from "./output/outputSlice";
import { resetInput } from "./input/inputSlice";
import { pushInput } from "./input/inputSlice";
import { pushOutput } from "./output/outputSlice";

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
      dispatch(resetInput());
      dispatch(resetOutput());
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
