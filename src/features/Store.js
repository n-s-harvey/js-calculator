// @ts-check
import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './input/inputSlice'
import workingEntryReducer from './output/workingEntrySlice'

export default configureStore({
  reducer: {
    input: inputReducer,
    output: workingEntryReducer
  },
})
