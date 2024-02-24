// @ts-check
import React from "react";
import { useSelector } from "react-redux";

export default function DisplayOutput() {
  /**
   * @param {{ output: {value: string} }} state
   */
  function outputSelector(state) {
    return state.output.value;
  }
  const outputText = useSelector(outputSelector);
  return (
    <div id="display">{outputText}</div>
  )
}

