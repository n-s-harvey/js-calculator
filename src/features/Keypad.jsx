// @ts-check

import React from "react"
import KeypadButton from "./Keypad-Button"
import Operators from "./Operators"

// import '../App.scss'

export default function Keypad() {

  return (
    <div id="keypad">
      <KeypadButton displayText="clear" position="clear" />
      <KeypadButton displayText={Operators.add} position="add" extended={true} />
      <KeypadButton displayText={Operators.subtract} position="subtract" />
      <KeypadButton displayText={Operators.multiply} position="multiply" />
      <KeypadButton displayText={Operators.divide} position="divide" />
      <KeypadButton displayText="=" position="equals" extended={true} />
      <KeypadButton displayText="." position="decimal" />
      <KeypadButton displayText="9" position="nine" />
      <KeypadButton displayText="8" position="eight" />
      <KeypadButton displayText="7" position="seven" />
      <KeypadButton displayText="6" position="six" />
      <KeypadButton displayText="5" position="five" />
      <KeypadButton displayText="4" position="four" />
      <KeypadButton displayText="3" position="three" />
      <KeypadButton displayText="2" position="two" />
      <KeypadButton displayText="1" position="one" />
      <KeypadButton displayText="0" position="zero" extended={true} />
    </div>
  )

}
