// @ts-check

import React from "react";
import Keypad from "./Keypad";
import Display from "./Display";

export default function Calculator() {
  return (
    <div id="calculator" className="inter-regular">
      <Display />
      <Keypad />
    </div>
  )
}
