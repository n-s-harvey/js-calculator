// @ts-check
import React from "react"
import { useDispatch } from "react-redux"
import handleKeydown from "./Middleware";

/**
 * @param {Object} props
 * @param {string} props.displayText - Character displayed on the calculator key.
 * @param {string} props.position - CSS grid-area assigned to key.
 * @param {boolean} [ props.extended ] - True if button is larger than 1 grid unit.
 */
export default function KeypadButton(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handleKeydown(props.displayText));
  }
  return (
    <>
      <button
        id={props.position}
        className={`keypad-button ${props.extended ? 'multi' : ''}`}
        onClick={handleClick}
      >
        {props.displayText}
      </button >
    </>
  )
}
