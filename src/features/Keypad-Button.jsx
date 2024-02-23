// @ts-check
import React from "react"

/**
 * @param {Object} props
 * @param {string} props.displayText - Character displayed on the calculator key.
 * @param {string} props.position - CSS grid-area assigned to key.
 * @param {boolean} [ props.extended ] - True if button is larger than 1 grid unit.
 */
export default function KeypadButton(props) {
  return (
    <>
      <button
        id={props.position}
        className={`keypad-button ${props.extended ? 'multi' : ''}`}
      >
        {props.displayText}
      </button >
    </>
  )
}
