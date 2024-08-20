import {configureStore} from "@reduxjs/toolkit"
import shadows from "./features/shadows"
import boxProperties from "./features/boxProperties"

export const store = configureStore({
  reducer: {
    shadows,
    boxProperties
  }
})