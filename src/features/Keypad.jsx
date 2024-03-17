// @ts-check

import React from "react"
import KeypadButton from "./Keypad-Button"
import Operators from "./Operators"

// import '../App.scss'

export default function Keypad() {

  return (
    <div id="keypad">
      <KeypadButton displayText="clear" position="clear" style="op-keys" />
      <KeypadButton displayText={Operators.add} position="add" extended={true} style="op-keys" />
      <KeypadButton displayText={Operators.subtract} position="subtract" style="op-keys" />
      <KeypadButton displayText={Operators.multiply} position="multiply" style="op-keys" />
      <KeypadButton displayText={Operators.divide} position="divide" style="op-keys" />
      <KeypadButton displayText="=" position="equals" style="op-keys" extended={true} />
      <KeypadButton displayText="." position="decimal" style="op-keys" />
      <KeypadButton displayText="9" position="nine" style="num-keys" />
      <KeypadButton displayText="8" position="eight" style="num-keys" />
      <KeypadButton displayText="7" position="seven" style="num-keys" />
      <KeypadButton displayText="6" position="six" style="num-keys" />
      <KeypadButton displayText="5" position="five" style="num-keys" />
      <KeypadButton displayText="4" position="four" style="num-keys" />
      <KeypadButton displayText="3" position="three" style="num-keys" />
      <KeypadButton displayText="2" position="two" style="num-keys" />
      <KeypadButton displayText="1" position="one" style="num-keys" />
      <KeypadButton displayText="0" position="zero" extended={true} style="num-keys" />
    </div>
  )

}
