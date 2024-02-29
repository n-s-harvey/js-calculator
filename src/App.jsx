// @ts-check

import Calculator from './features/Calculator'
import React from 'react'
import './App.scss'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = "JavaScript Calculator";
  })
  return (
    <Calculator />
  )
}

export default App
