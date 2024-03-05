// @ts-check
import React from "react";
import { useSelector } from "react-redux";

export default function DisplayInput() {
  /**
   * @param {{ input: {value: string}} } state
   */
  function inputSelector(state) {
    return state.input.value;
  }
  const inputText = useSelector(inputSelector);
  return (
    <div id="input">{inputText}</div>
  )
}

