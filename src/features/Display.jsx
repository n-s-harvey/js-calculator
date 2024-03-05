// @ts-check
import React from "react";
import DisplayInput from "./display/Input";
import DisplayOutput from "./display/Output";

export default function Display() {
  return (
    <div id="display-group">
      <DisplayInput />
      <DisplayOutput />
    </div>
  )
}
