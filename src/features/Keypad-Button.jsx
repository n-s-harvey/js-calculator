// @ts-check
import React from "react"
import { useDispatch } from "react-redux"
import handleKeydown from "./Middleware";

/**
 * @param {Object} props
 * @param {string} props.displayText - Character displayed on the calculator key.
 * @param {string} props.position - CSS grid-area assigned to key.
 * @param {boolean} [ props.extended ] - True if button is larger than 1 grid unit.
 * @param {string} props.style - CSS class name
 */
export default function KeypadButton(props) {
  // TODO: add prop for bg-color?
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handleKeydown(props.displayText));
  }
  return (
    <>
      <button
        id={props.position}
        className={`keypad-button inter-regular ${props.extended ? 'multi' : ''} ${props.style}`}
        onClick={handleClick}
      >
        {props.displayText}
      </button >
    </>
  )
}
