// @ts-check
import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './input/inputSlice'
import outputReducer from './output/outputSlice'

export default configureStore({
  reducer: {
    input: inputReducer,
    output: outputReducer
  },
})
