// @ts-check
import React from "react"

/**
 * @param {Object} props
 * @param {string} props.displayText - Character displayed on the calculator key.
 */
export default function KeypadButton(props) {
  return (
    <>
      <button>
        {props.displayText}
      </button>
    </>
  )
}
